import zod from "zod";

const validator = (schema, input) => {
  const result = schema.safeParse(input);
  if (result.success) {
    return result.data;
  } else {
    throw new Error(result.error);
  }
};

export { validator };
