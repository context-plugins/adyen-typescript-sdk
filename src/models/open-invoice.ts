import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type39Schema, type Type39 } from "./type39.js";

export type OpenInvoice = {
  billingAddress?: string;
  checkoutAttemptId?: string;
  deliveryAddress?: string;
  personalDetails?: string;
  recurringDetailReference?: string;
  sdkData?: string;
  storedPaymentMethodId?: string;
  type?: Type39;
};

export const openInvoiceSchema: Schema<OpenInvoice> = s.object<OpenInvoice>({
  billingAddress: s.optional(s.string()),
  checkoutAttemptId: s.optional(s.string()),
  deliveryAddress: s.optional(s.string()),
  personalDetails: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: s.optional(s.lazy(() => type39Schema)),
});
