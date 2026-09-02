import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type KycCheckSummary = {
  kycCheckCode?: number;
  kycCheckDescription?: string;
};

export const kycCheckSummarySchema: Schema<KycCheckSummary> = s.object<KycCheckSummary>({
  kycCheckCode: s.optional(s.number()),
  kycCheckDescription: s.optional(s.string()),
});
