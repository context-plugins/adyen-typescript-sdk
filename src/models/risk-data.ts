import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RiskData = {
  clientData?: string;
  customFields?: Record<string, string>;
  fraudOffset?: number;
  profileReference?: string;
};

export const riskDataSchema: Schema<RiskData> = s.object<RiskData>({
  clientData: s.optional(s.string()),
  customFields: s.optional(s.record(s.string(), s.string())),
  fraudOffset: s.optional(s.number()),
  profileReference: s.optional(s.string()),
});
