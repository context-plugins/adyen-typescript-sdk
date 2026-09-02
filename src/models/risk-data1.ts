import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RiskData1 = {
  clientData?: string;
  customFields?: Record<string, string>;
  fraudOffset?: number;
  profileReference?: string;
};

export const riskData1Schema: Schema<RiskData1> = s.object<RiskData1>({
  clientData: s.optional(s.string()),
  customFields: s.optional(s.record(s.string(), s.string())),
  fraudOffset: s.optional(s.number()),
  profileReference: s.optional(s.string()),
});
