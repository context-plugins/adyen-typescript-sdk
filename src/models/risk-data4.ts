import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RiskData4 = {
  clientData?: string;
  customFields?: Record<string, string>;
  fraudOffset?: number;
  profileReference?: string;
};

export const riskData4Schema: Schema<RiskData4> = s.object<RiskData4>({
  clientData: s.optional(s.string()),
  customFields: s.optional(s.record(s.string(), s.string())),
  fraudOffset: s.optional(s.number()),
  profileReference: s.optional(s.string()),
});
