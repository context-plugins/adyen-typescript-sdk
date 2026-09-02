import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FraudRiskLevel = {
  VeryLow: "veryLow",
  Low: "low",
  Medium: "medium",
  High: "high",
  VeryHigh: "veryHigh",
} as const;
export type FraudRiskLevel = (typeof FraudRiskLevel)[keyof typeof FraudRiskLevel] | (string & {});

export const fraudRiskLevelSchema: EnumSchema<FraudRiskLevel> = s.enumOf<FraudRiskLevel>(FraudRiskLevel);
