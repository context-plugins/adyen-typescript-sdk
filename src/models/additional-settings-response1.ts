import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdditionalSettingsResponse1 = {
  excludeEventCodes?: string[];
  includeEventCodes?: string[];
  properties?: Record<string, boolean>;
};

export const additionalSettingsResponse1Schema: Schema<AdditionalSettingsResponse1> =
  s.object<AdditionalSettingsResponse1>({
    excludeEventCodes: s.optional(s.array(s.string())),
    includeEventCodes: s.optional(s.array(s.string())),
    properties: s.optional(s.record(s.string(), s.boolean())),
  });
