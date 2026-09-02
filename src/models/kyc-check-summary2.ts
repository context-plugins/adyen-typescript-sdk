import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type KycCheckSummary2 = {
  kycCheckCode?: number;
  kycCheckDescription?: string;
};

export const kycCheckSummary2Schema: Schema<KycCheckSummary2> = s.object<KycCheckSummary2>({
  kycCheckCode: s.optional(s.number()),
  kycCheckDescription: s.optional(s.string()),
});
