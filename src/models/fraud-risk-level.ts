import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The risk level of the transaction as classified by the [machine
 * learning](https://docs.adyen.com/risk-management/configure-your-risk-profile/machine-learning-rules/)
 * fraud risk rule. The risk level indicates the likelihood that a transaction will result in a
 * fraudulent dispute. Possible values:
 * * veryLow
 * * low
 * * medium
 * * high
 * * veryHigh
 */
export const FraudRiskLevel = {
  VeryLow: "veryLow",
  Low: "low",
  Medium: "medium",
  High: "high",
  VeryHigh: "veryHigh",
} as const;
export type FraudRiskLevel = (typeof FraudRiskLevel)[keyof typeof FraudRiskLevel] | (string & {});

export const fraudRiskLevelSchema: EnumSchema<FraudRiskLevel> = s.enumOf<FraudRiskLevel>(FraudRiskLevel);
