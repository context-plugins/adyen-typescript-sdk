import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payoutScheduleResponse4Schema, type PayoutScheduleResponse4 } from "./payout-schedule-response4.js";
import { payoutSpeedSchema, type PayoutSpeed } from "./payout-speed.js";

export type Account = {
  accountCode?: string;
  bankAccountUuid?: string;
  beneficiaryAccount?: string;
  beneficiaryMerchantReference?: string;
  description?: string;
  metadata?: Record<string, string>;
  payoutMethodCode?: string;
  payoutSchedule?: PayoutScheduleResponse4;
  payoutSpeed?: PayoutSpeed;
  status?: string;
};

export const accountSchema: Schema<Account> = s.object<Account>({
  accountCode: s.optional(s.string()),
  bankAccountUuid: s.optional(s.string()),
  beneficiaryAccount: s.optional(s.string()),
  beneficiaryMerchantReference: s.optional(s.string()),
  description: s.optional(s.string()),
  metadata: s.optional(s.record(s.string(), s.string())),
  payoutMethodCode: s.optional(s.string()),
  payoutSchedule: s.optional(s.lazy(() => payoutScheduleResponse4Schema)),
  payoutSpeed: s.optional(s.lazy(() => payoutSpeedSchema)),
  status: s.optional(s.string()),
  _keysMap: {
    bankAccountUuid: "bankAccountUUID",
  },
});
