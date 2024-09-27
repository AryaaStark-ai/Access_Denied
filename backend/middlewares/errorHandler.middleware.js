import path from "path";
import { fileURLToPath } from "url";
import ApiError from "../utils/ApiError.util.js";
import ApiResponse from "../utils/ApiResponse.util.js";
import { ZodError } from "zod";
import ENV_VARIABLES from "../constants.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const serverRoot = path.resolve(__dirname, "../"); // This should point to the 'src' directory

const errorHandler = (err, req, res, next) => {
  let error = err;
  let isZodError = err instanceof ZodError;

  if (isZodError) {
    error = ApiError.validationError("Validation Error", err.format());
  } else if (!(err instanceof ApiError)) {
    error = ApiError.internalServerError(
      err.message || "Internal Server Error",
      err.details || {}
    );
  }

  const { message, statusCode, errorType, details } = error;
  const stack = error?.stack?.split("\n");

  const formattedResponse = new ApiResponse(
    {
      errorType,
      details,
      parent: getParentFunctions(stack),
    },
    message,
    statusCode
  );

  console.error("\x1b[31m%s\x1b[0m", "--- ERROR REPORT ---");
  console.error(`Message: ${message || "N/A"}`);
  console.error(`Status Code: ${statusCode || "N/A"}`);
  console.error(`Error Type: ${errorType || "N/A"}`);

  if (details) {
    console.error("Details:");
    console.dir(details, { depth: 1, colors: true });
  }

  if (formattedResponse.data.parent.length) {
    console.error("\x1b[34m%s\x1b[0m", "Parent Functions:");
    formattedResponse.data.parent.forEach(
      ({ functionName, filePath, lineNumber, columnNumber }, idx) => {
        console.error(
          `\x1b[34m${
            idx + 1
          }.\x1b[0m ${functionName} at \x1b[36m${filePath}:${lineNumber}:${columnNumber}\x1b[0m`
        );
      }
    );
  }

  console.error("\x1b[31m%s\x1b[0m", "--- END ERROR REPORT ---");

  const resError = {
    message,
    statusCode,
    errorType,
    details: {
      ...details,
      ...(isZodError ? { validationErrors: err.format() } : {}),
    },
  };

  return res
    .status(statusCode)
    .json(ENV_VARIABLES.DEV_MODE ? formattedResponse : resError);
};

const getParentFunctions = stack => {
  const parentFunctions = [];

  for (let i = 1; i < stack.length; i++) {
    const line = stack[i];
    const match = line.match(
      /at (?<functionName>.+) \((?<filePath>.+):(?<lineNumber>\d+):(?<columnNumber>\d+)\)/
    );
    if (match) {
      const { functionName, filePath, lineNumber, columnNumber } = match.groups;
      let relativePath;

      if (filePath.includes("node_modules")) {
        // Keep node_modules paths as they are
        relativePath = filePath.substring(filePath.indexOf("node_modules"));
      } else if (filePath.includes("src")) {
        // For source files, make the path relative to the 'src' directory
        relativePath = filePath.substring(filePath.indexOf("src"));
      } else {
        relativePath = path.relative(serverRoot, filePath);
        relativePath = relativePath.startsWith("src")
          ? relativePath
          : `src/${relativePath}`;
      }

      // Convert backslashes to forward slashes for consistency
      relativePath = relativePath.replace(/\\/g, "/");

      // Remove 'file:/' prefix if present
      relativePath = relativePath.replace(/^file:\/+/, "");

      parentFunctions.push({
        functionName,
        filePath: relativePath,
        lineNumber,
        columnNumber,
      });
    }
  }
  return parentFunctions;
};

export default errorHandler;
