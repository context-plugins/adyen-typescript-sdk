import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdditionalSettingsResponse = {
  excludeEventCodes?: string[];
  includeEventCodes?: string[];
  properties?: Record<string, boolean>;
};

export const additionalSettingsResponseSchema: Schema<AdditionalSettingsResponse> =
  s.object<AdditionalSettingsResponse>({
    excludeEventCodes: s.optional(s.array(s.string())),
    includeEventCodes: s.optional(s.array(s.string())),
    properties: s.optional(s.record(s.string(), s.boolean())),
  });
