import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorFieldTypeSchema, type ErrorFieldType } from "./error-field-type.js";
import { payoutScheduleResponse3Schema, type PayoutScheduleResponse3 } from "./payout-schedule-response3.js";
import { payoutSpeed4Schema, type PayoutSpeed4 } from "./payout-speed4.js";

export type UpdateAccountResponse = {
  accountCode: string;
  bankAccountUuid?: string;
  description?: string;
  invalidFields?: ErrorFieldType[];
  metadata?: Record<string, string>;
  payoutMethodCode?: string;
  payoutSchedule?: PayoutScheduleResponse3;
  payoutSpeed?: PayoutSpeed4;
  pspReference?: string;
  resultCode?: string;
};

export const updateAccountResponseSchema: Schema<UpdateAccountResponse> = s.object<UpdateAccountResponse>({
  accountCode: s.string(),
  bankAccountUuid: s.optional(s.string()),
  description: s.optional(s.string()),
  invalidFields: s.optional(s.array(s.lazy(() => errorFieldTypeSchema))),
  metadata: s.optional(s.record(s.string(), s.string())),
  payoutMethodCode: s.optional(s.string()),
  payoutSchedule: s.optional(s.lazy(() => payoutScheduleResponse3Schema)),
  payoutSpeed: s.optional(s.lazy(() => payoutSpeed4Schema)),
  pspReference: s.optional(s.string()),
  resultCode: s.optional(s.string()),
  _keysMap: {
    bankAccountUuid: "bankAccountUUID",
  },
});
