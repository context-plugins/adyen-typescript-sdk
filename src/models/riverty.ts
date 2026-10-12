import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type49, type49Schema } from "./type49.js";

export type Riverty = {
  /** The address where to send the invoice. */
  billingAddress?: string;
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  /** The address where the goods should be delivered. */
  deliveryAddress?: string;
  /**
   * A string containing the shopper's device fingerprint. For more information, refer to [Device
   * fingerprinting](https://docs.adyen.com/risk-management/device-fingerprinting).
   */
  deviceFingerprint?: string;
  /** The iban number of the customer */
  iban?: string;
  /**
   * Base64-encoded merchant metadata (Extra Merchant Data) forwarded to Riverty at authorization.
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
  /** The payment method subtype. */
  subtype?: string;
  /** **riverty** @default Type49.Riverty */
  type?: Type49;
};

export const rivertySchema: Schema<Riverty> = s.object<Riverty>({
  billingAddress: s.optional(s.string()),
  checkoutAttemptId: s.optional(s.string()),
  deliveryAddress: s.optional(s.string()),
  deviceFingerprint: s.optional(s.string()),
  iban: s.optional(s.string()),
  merchantData: s.optional(s.string()),
  personalDetails: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  subtype: s.optional(s.string()),
  type: s.defaulted(type49Schema, Type49.Riverty),
});
