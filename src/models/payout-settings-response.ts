import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payoutSettingsSchema, type PayoutSettings } from "./payout-settings.js";

export type PayoutSettingsResponse = {
  /** The list of payout accounts. */
  data?: PayoutSettings[];
};

export const payoutSettingsResponseSchema: Schema<PayoutSettingsResponse> = s.object<PayoutSettingsResponse>({
  data: s.optional(s.array(s.lazy(() => payoutSettingsSchema))),
});
