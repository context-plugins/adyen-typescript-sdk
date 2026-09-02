import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TypeCode1 = {
  Personal: "Personal",
  Company: "Company",
} as const;
export type TypeCode1 = (typeof TypeCode1)[keyof typeof TypeCode1] | (string & {});

export const typeCode1Schema: EnumSchema<TypeCode1> = s.enumOf<TypeCode1>(TypeCode1);
