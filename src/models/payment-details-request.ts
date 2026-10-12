import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  detailsRequestAuthenticationData1Schema,
  type DetailsRequestAuthenticationData1,
} from "./details-request-authentication-data1.js";
import {
  paymentCompletionDetails1Schema,
  type PaymentCompletionDetails1,
} from "./payment-completion-details1.js";

export type PaymentDetailsRequest = {
  /** Data for 3DS authentication. */
  authenticationData?: DetailsRequestAuthenticationData1;
  /**
   * Use this collection to submit the details that were returned as a result of the `/payments`
   * call.
   */
  details: PaymentCompletionDetails1;
  /**
   * Encoded payment data. For [authorizing a payment after using 3D Secure 2
   * Authentication-only](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only/#authorise-the-payment-with-adyen):
   *
   * If you received `resultCode`: **AuthenticationNotRequired** in the `/payments` response, use
   * the `threeDSPaymentData` from the same response.
   *
   * If you received `resultCode`: **AuthenticationFinished** in the `/payments` response, use the
   * `action.paymentData` from the same response.
   */
  paymentData?: string;
  /**
   * Change the `authenticationOnly` indicator originally set in the `/payments` request. Only needs
   * to be set if you want to modify the value set previously.
   *
   * @deprecated
   */
  threeDsAuthenticationOnly?: boolean;
};

export const paymentDetailsRequestSchema: Schema<PaymentDetailsRequest> = s.object<PaymentDetailsRequest>({
  authenticationData: s.optional(s.lazy(() => detailsRequestAuthenticationData1Schema)),
  details: paymentCompletionDetails1Schema,
  paymentData: s.optional(s.string()),
  threeDsAuthenticationOnly: s.optional(s.boolean()),
  _keysMap: {
    threeDsAuthenticationOnly: "threeDSAuthenticationOnly",
  },
});
