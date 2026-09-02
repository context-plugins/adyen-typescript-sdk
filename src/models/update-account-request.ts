import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payoutSpeed1Schema, type PayoutSpeed1 } from "./payout-speed1.js";
import {
  updatePayoutScheduleRequest2Schema,
  type UpdatePayoutScheduleRequest2,
} from "./update-payout-schedule-request2.js";

export type UpdateAccountRequest = {
  accountCode: string;
  bankAccountUuid?: string;
  description?: string;
  metadata?: Record<string, string>;
  payoutMethodCode?: string;
  payoutSchedule?: UpdatePayoutScheduleRequest2;
  payoutSpeed?: PayoutSpeed1;
};

export const updateAccountRequestSchema: Schema<UpdateAccountRequest> = s.object<UpdateAccountRequest>({
  accountCode: s.string(),
  bankAccountUuid: s.optional(s.string()),
  description: s.optional(s.string()),
  metadata: s.optional(s.record(s.string(), s.string())),
  payoutMethodCode: s.optional(s.string()),
  payoutSchedule: s.optional(s.lazy(() => updatePayoutScheduleRequest2Schema)),
  payoutSpeed: s.optional(s.lazy(() => payoutSpeed1Schema)),
  _keysMap: {
    bankAccountUuid: "bankAccountUUID",
  },
});
