import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount11Schema, type Amount11 } from "./amount11.js";
import {
  checkoutForwardRequestCard2Schema,
  type CheckoutForwardRequestCard2,
} from "./checkout-forward-request-card2.js";
import {
  checkoutForwardRequestOptions2Schema,
  type CheckoutForwardRequestOptions2,
} from "./checkout-forward-request-options2.js";
import {
  checkoutOutgoingForwardRequest2Schema,
  type CheckoutOutgoingForwardRequest2,
} from "./checkout-outgoing-forward-request2.js";

export type CheckoutForwardRequest = {
  /** The amount of the forwarded payment. */
  amount?: Amount11;
  /**
   * The base URL of the third party API, where Adyen will send the request to forward the payment
   * details.
   */
  baseUrl: string;
  /** Your merchant account. */
  merchantAccount: string;
  /** Merchant defined payment reference. */
  merchantReference?: string;
  /** The customizations that can be applied when making a forward request. */
  options?: CheckoutForwardRequestOptions2;
  /** The card details. */
  paymentMethod?: CheckoutForwardRequestCard2;
  /**
   * The [details of the
   * request](https://docs.adyen.com/online-payments/tokenization/forward-payment-details#request-to-adyen-card)
   * that you want to forward to the third-party.
   */
  request: CheckoutOutgoingForwardRequest2;
  /**
   * Your reference to uniquely identify this shopper, for example user ID or account ID. The value
   * is case-sensitive and must be at least three characters. > Your reference must not include
   * personally identifiable information (PII) such as name or email address.
   */
  shopperReference: string;
  /**
   * The unique identifier of the token that you want to forward to the third party. This is the
   * `storedPaymentMethodId` you received in the webhook after you created the token.
   */
  storedPaymentMethodId?: string;
};

export const checkoutForwardRequestSchema: Schema<CheckoutForwardRequest> = s.object<CheckoutForwardRequest>({
  amount: s.optional(s.lazy(() => amount11Schema)),
  baseUrl: s.string(),
  merchantAccount: s.string(),
  merchantReference: s.optional(s.string()),
  options: s.optional(s.lazy(() => checkoutForwardRequestOptions2Schema)),
  paymentMethod: s.optional(s.lazy(() => checkoutForwardRequestCard2Schema)),
  request: checkoutOutgoingForwardRequest2Schema,
  shopperReference: s.string(),
  storedPaymentMethodId: s.optional(s.string()),
});
