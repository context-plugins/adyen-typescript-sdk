import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpdatePayoutSettingsRequest = {
  /**
   * Indicates if payouts to this bank account are enabled. Default: **true**.
   *
   * To receive payouts into this bank account, both `enabled` and `allowed` must be **true**.
   */
  enabled?: boolean;
};

export const updatePayoutSettingsRequestSchema: Schema<UpdatePayoutSettingsRequest> =
  s.object<UpdatePayoutSettingsRequest>({
    enabled: s.optional(s.boolean()),
  });
