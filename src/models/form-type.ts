import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FormType = {
  Us1099K: "US1099k",
  Us1099Nec: "US1099nec",
} as const;
export type FormType = (typeof FormType)[keyof typeof FormType] | (string & {});

export const formTypeSchema: EnumSchema<FormType> = s.enumOf<FormType>(FormType);
