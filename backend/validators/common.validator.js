const idSchema = zod.string().regex(/^[0-9a-fA-F]{24}$/);

export { idSchema };
