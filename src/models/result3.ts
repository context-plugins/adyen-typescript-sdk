import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Possible values:
 * * **Success**
 * * **Failure**
 * * **Partial**
 */
export const Result3 = {
  Success: "Success",
  Failure: "Failure",
  Partial: "Partial",
} as const;
export type Result3 = (typeof Result3)[keyof typeof Result3] | (string & {});

export const result3Schema: EnumSchema<Result3> = s.enumOf<Result3>(Result3);
