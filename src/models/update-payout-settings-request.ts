import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpdatePayoutSettingsRequest = {
  enabled?: boolean;
};

export const updatePayoutSettingsRequestSchema: Schema<UpdatePayoutSettingsRequest> =
  s.object<UpdatePayoutSettingsRequest>({
    enabled: s.optional(s.boolean()),
  });
