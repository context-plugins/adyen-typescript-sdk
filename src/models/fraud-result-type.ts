import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The fraud result properties of the payment. Possible values:
 * * AMBER
 * * GREEN
 * * RED
 */
export const FraudResultType = {
  Amber: "AMBER",
  Green: "GREEN",
  Red: "RED",
} as const;
export type FraudResultType = (typeof FraudResultType)[keyof typeof FraudResultType] | (string & {});

export const fraudResultTypeSchema: EnumSchema<FraudResultType> = s.enumOf<FraudResultType>(FraudResultType);
