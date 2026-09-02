import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdditionalSettings1 = {
  includeEventCodes?: string[];
  properties?: Record<string, boolean>;
};

export const additionalSettings1Schema: Schema<AdditionalSettings1> = s.object<AdditionalSettings1>({
  includeEventCodes: s.optional(s.array(s.string())),
  properties: s.optional(s.record(s.string(), s.boolean())),
});
