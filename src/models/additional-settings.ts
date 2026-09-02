import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdditionalSettings = {
  includeEventCodes?: string[];
  properties?: Record<string, boolean>;
};

export const additionalSettingsSchema: Schema<AdditionalSettings> = s.object<AdditionalSettings>({
  includeEventCodes: s.optional(s.array(s.string())),
  properties: s.optional(s.record(s.string(), s.boolean())),
});
