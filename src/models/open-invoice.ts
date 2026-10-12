import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type39, type39Schema } from "./type39.js";

export type OpenInvoice = {
  /** The address where to send the invoice. */
  billingAddress?: string;
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  /** The address where the goods should be delivered. */
  deliveryAddress?: string;
  /** Shopper name, date of birth, phone number, and email address. */
  personalDetails?: string;
  /**
   * This is the `recurringDetailReference` returned in the response when you created the token.
   *
   * @deprecated
   */
  recurringDetailReference?: string;
  /** Base64-encoded JSON object containing SDK related parameters required by the SDK */
  sdkData?: string;
  /** This is the `recurringDetailReference` returned in the response when you created the token. */
  storedPaymentMethodId?: string;
  /** **openinvoice** @default Type39.Openinvoice */
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
  type: s.defaulted(type39Schema, Type39.Openinvoice),
});
