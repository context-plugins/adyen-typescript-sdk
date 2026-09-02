import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorFieldTypeSchema, type ErrorFieldType } from "./error-field-type.js";
import { payoutScheduleResponse1Schema, type PayoutScheduleResponse1 } from "./payout-schedule-response1.js";
import { payoutSpeedSchema, type PayoutSpeed } from "./payout-speed.js";
import { status42Schema, type Status42 } from "./status42.js";

export type CreateAccountResponse = {
  accountCode?: string;
  accountHolderCode?: string;
  bankAccountUuid?: string;
  description?: string;
  invalidFields?: ErrorFieldType[];
  metadata?: Record<string, string>;
  payoutMethodCode?: string;
  payoutSchedule?: PayoutScheduleResponse1;
  payoutSpeed?: PayoutSpeed;
  pspReference?: string;
  resultCode?: string;
  status?: Status42;
};

export const createAccountResponseSchema: Schema<CreateAccountResponse> = s.object<CreateAccountResponse>({
  accountCode: s.optional(s.string()),
  accountHolderCode: s.optional(s.string()),
  bankAccountUuid: s.optional(s.string()),
  description: s.optional(s.string()),
  invalidFields: s.optional(s.array(s.lazy(() => errorFieldTypeSchema))),
  metadata: s.optional(s.record(s.string(), s.string())),
  payoutMethodCode: s.optional(s.string()),
  payoutSchedule: s.optional(s.lazy(() => payoutScheduleResponse1Schema)),
  payoutSpeed: s.optional(s.lazy(() => payoutSpeedSchema)),
  pspReference: s.optional(s.string()),
  resultCode: s.optional(s.string()),
  status: s.optional(s.lazy(() => status42Schema)),
  _keysMap: {
    bankAccountUuid: "bankAccountUUID",
  },
});
