import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type34, type34Schema } from "./type34.js";

export type Klarna = {
  /** The address where to send the invoice. */
  billingAddress?: string;
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  /** The address where the goods should be delivered. */
  deliveryAddress?: string;
  /**
   * Base64-encoded merchant metadata (Extra Merchant Data) forwarded to Klarna at authorization.
   */
  merchantData?: string;
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
  /** The type of flow to initiate. */
  subtype?: string;
  /** **klarna** @default Type34.Klarna */
  type?: Type34;
};

export const klarnaSchema: Schema<Klarna> = s.object<Klarna>({
  billingAddress: s.optional(s.string()),
  checkoutAttemptId: s.optional(s.string()),
  deliveryAddress: s.optional(s.string()),
  merchantData: s.optional(s.string()),
  personalDetails: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  subtype: s.optional(s.string()),
  type: s.defaulted(type34Schema, Type34.Klarna),
});
