import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformPaymentTypeSchema, type PlatformPaymentType } from "./platform-payment-type.js";
import { type63Schema, type Type63 } from "./type63.js";

export type PlatformPayment = {
  modificationMerchantReference?: string;
  modificationPspReference?: string;
  paymentMerchantReference?: string;
  platformPaymentType?: PlatformPaymentType;
  pspPaymentReference?: string;
  type?: Type63;
};

export const platformPaymentSchema: Schema<PlatformPayment> = s.object<PlatformPayment>({
  modificationMerchantReference: s.optional(s.string()),
  modificationPspReference: s.optional(s.string()),
  paymentMerchantReference: s.optional(s.string()),
  platformPaymentType: s.optional(s.lazy(() => platformPaymentTypeSchema)),
  pspPaymentReference: s.optional(s.string()),
  type: s.optional(s.lazy(() => type63Schema)),
});
