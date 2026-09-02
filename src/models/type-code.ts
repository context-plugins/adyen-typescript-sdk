import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TypeCode = {
  Personal: "Personal",
  Company: "Company",
} as const;
export type TypeCode = (typeof TypeCode)[keyof typeof TypeCode] | (string & {});

export const typeCodeSchema: EnumSchema<TypeCode> = s.enumOf<TypeCode>(TypeCode);
