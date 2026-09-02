import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PayoutSettingsRequest = {
  enabled?: boolean;
  enabledFromDate?: string;
  transferInstrumentId: string;
};

export const payoutSettingsRequestSchema: Schema<PayoutSettingsRequest> = s.object<PayoutSettingsRequest>({
  enabled: s.optional(s.boolean()),
  enabledFromDate: s.optional(s.string()),
  transferInstrumentId: s.string(),
});
