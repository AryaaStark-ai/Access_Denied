const errorTypesToStatusCodes = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
  VALIDATION_ERROR: 422,
  UNSUPPORTED_MEDIA_TYPE: 415,
};

class ApiError extends Error {
  constructor(message, errorType, statusCode = 500, details = {}) {
    super(message);
    this.statusCode = statusCode;
    this.errorType = errorType;
    this.details = details;
  }

  static badRequest(message, details = {}) {
    return new ApiError(
      message,
      "BAD_REQUEST",
      errorTypesToStatusCodes.BAD_REQUEST,
      details
    );
  }

  static unauthorized(message, details = {}) {
    return new ApiError(
      message,
      "UNAUTHORIZED",
      errorTypesToStatusCodes.UNAUTHORIZED,
      details
    );
  }

  static forbidden(message, details = {}) {
    return new ApiError(
      message,
      "FORBIDDEN",
      errorTypesToStatusCodes.FORBIDDEN,
      details
    );
  }

  static notFound(message, details = {}) {
    return new ApiError(
      message,
      "NOT_FOUND",
      errorTypesToStatusCodes.NOT_FOUND,
      details
    );
  }

  static conflict(message, details = {}) {
    return new ApiError(
      message,
      "CONFLICT",
      errorTypesToStatusCodes.CONFLICT,
      details
    );
  }

  static internalServerError(message, details = {}) {
    return new ApiError(
      message,
      "INTERNAL_SERVER_ERROR",
      errorTypesToStatusCodes.INTERNAL_SERVER_ERROR,
      details
    );
  }

  static validationError(message, details = {}) {
    return new ApiError(
      message,
      "VALIDATION_ERROR",
      errorTypesToStatusCodes.VALIDATION_ERROR,
      details
    );
  }

  static unsupportedMediaType(message, details = {}) {
    return new ApiError(
      message,
      "UNSUPPORTED_MEDIA_TYPE",
      errorTypesToStatusCodes.UNSUPPORTED_MEDIA_TYPE,
      details
    );
  }
}

export default ApiError;
