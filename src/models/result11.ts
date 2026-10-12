import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Result of the processing of the message. Possible values:
 * * **Failure**
 * * **Partial**
 * * **Success**
 */
export const Result11 = {
  Success: "Success",
  Failure: "Failure",
  Partial: "Partial",
} as const;
export type Result11 = (typeof Result11)[keyof typeof Result11] | (string & {});

export const result11Schema: EnumSchema<Result11> = s.enumOf<Result11>(Result11);
