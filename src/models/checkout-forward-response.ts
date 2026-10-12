import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  checkoutForwardResponseFromUrl2Schema,
  type CheckoutForwardResponseFromUrl2,
} from "./checkout-forward-response-from-url2.js";

export type CheckoutForwardResponse = {
  /** Merchant defined payment reference. */
  merchantReference?: string;
  /**
   * Adyen's 16-character reference associated with the transaction/request. This value is globally
   * unique. Use this reference when you communicate with us about this request.
   */
  pspReference?: string;
  /** The details of the response Adyen received from the third party. */
  response: CheckoutForwardResponseFromUrl2;
  /** The unique identifier of the token. */
  storedPaymentMethodId?: string;
};

export const checkoutForwardResponseSchema: Schema<CheckoutForwardResponse> =
  s.object<CheckoutForwardResponse>({
    merchantReference: s.optional(s.string()),
    pspReference: s.optional(s.string()),
    response: checkoutForwardResponseFromUrl2Schema,
    storedPaymentMethodId: s.optional(s.string()),
  });
