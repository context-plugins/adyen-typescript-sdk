import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payoutScheduleSchema, type PayoutSchedule } from "./payout-schedule.js";
import { payoutSpeed1Schema, type PayoutSpeed1 } from "./payout-speed1.js";

export type CreateAccountRequest = {
  accountHolderCode: string;
  bankAccountUuid?: string;
  description?: string;
  metadata?: Record<string, string>;
  payoutMethodCode?: string;
  payoutSchedule?: PayoutSchedule;
  payoutScheduleReason?: string;
  payoutSpeed?: PayoutSpeed1;
};

export const createAccountRequestSchema: Schema<CreateAccountRequest> = s.object<CreateAccountRequest>({
  accountHolderCode: s.string(),
  bankAccountUuid: s.optional(s.string()),
  description: s.optional(s.string()),
  metadata: s.optional(s.record(s.string(), s.string())),
  payoutMethodCode: s.optional(s.string()),
  payoutSchedule: s.optional(s.lazy(() => payoutScheduleSchema)),
  payoutScheduleReason: s.optional(s.string()),
  payoutSpeed: s.optional(s.lazy(() => payoutSpeed1Schema)),
  _keysMap: {
    bankAccountUuid: "bankAccountUUID",
  },
});
