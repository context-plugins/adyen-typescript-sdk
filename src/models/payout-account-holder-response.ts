import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorFieldTypeSchema, type ErrorFieldType } from "./error-field-type.js";
import { payoutSpeedSchema, type PayoutSpeed } from "./payout-speed.js";

export type PayoutAccountHolderResponse = {
  bankAccountUuid?: string;
  invalidFields?: ErrorFieldType[];
  merchantReference?: string;
  payoutSpeed?: PayoutSpeed;
  pspReference?: string;
  resultCode?: string;
};

export const payoutAccountHolderResponseSchema: Schema<PayoutAccountHolderResponse> =
  s.object<PayoutAccountHolderResponse>({
    bankAccountUuid: s.optional(s.string()),
    invalidFields: s.optional(s.array(s.lazy(() => errorFieldTypeSchema))),
    merchantReference: s.optional(s.string()),
    payoutSpeed: s.optional(s.lazy(() => payoutSpeedSchema)),
    pspReference: s.optional(s.string()),
    resultCode: s.optional(s.string()),
    _keysMap: {
      bankAccountUuid: "bankAccountUUID",
    },
  });
