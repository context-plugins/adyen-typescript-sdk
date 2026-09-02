import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { prioritySchema, type Priority } from "./priority.js";
import { verificationStatus1Schema, type VerificationStatus1 } from "./verification-status1.js";

export type PayoutSettings = {
  allowed?: boolean;
  enabled?: boolean;
  enabledFromDate?: string;
  id: string;
  priority?: Priority;
  transferInstrumentId: string;
  verificationStatus?: VerificationStatus1;
};

export const payoutSettingsSchema: Schema<PayoutSettings> = s.object<PayoutSettings>({
  allowed: s.optional(s.boolean()),
  enabled: s.optional(s.boolean()),
  enabledFromDate: s.optional(s.string()),
  id: s.string(),
  priority: s.optional(s.lazy(() => prioritySchema)),
  transferInstrumentId: s.string(),
  verificationStatus: s.optional(s.lazy(() => verificationStatus1Schema)),
});
