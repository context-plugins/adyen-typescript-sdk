import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount26Schema, type Amount26 } from "./amount26.js";
import { checkoutOrderResponse1Schema, type CheckoutOrderResponse1 } from "./checkout-order-response1.js";
import { fraudResult1Schema, type FraudResult1 } from "./fraud-result1.js";
import { paymentResponse1Schema, type PaymentResponse1 } from "./payment-response1.js";
import { paymentResponse2Schema, type PaymentResponse2 } from "./payment-response2.js";
import { resultCode1Schema, type ResultCode1 } from "./result-code1.js";
import { threeDs2ResponseData1Schema, type ThreeDs2ResponseData1 } from "./three-ds2-response-data1.js";
import { threeDs2Result1Schema, type ThreeDs2Result1 } from "./three-ds2-result1.js";
import { action11Schema, type Action11 } from "./unions/action11.js";

/** Action to be taken for completing the payment. */
export type PaymentResponse9 = {
  /** Action to be taken for completing the payment. */
  action?: Action11;
  /**
   * Contains additional information about the payment. Some data fields are included only if you
   * select them first: Go to **Customer Area** > **Developers** > **Additional data**.
   */
  additionalData?: Record<string, string>;
  /** Authorised amount in the transaction. */
  amount?: Amount26;
  /** Donation Token containing payment details for Adyen Giving. */
  donationToken?: string;
  /** The fraud result properties of the payment. */
  fraudResult?: FraudResult1;
  /**
   * The reference to uniquely identify a payment. This reference is used in all communication with
   * you about the payment status. We recommend using a unique value per payment; however, it is not
   * a requirement. If you need to provide multiple references for a transaction, separate them with
   * hyphens ("-"). Maximum length: 80 characters.
   */
  merchantReference?: string;
  /**
   * Contains updated information regarding the order in case order information was provided in the
   * request.
   */
  order?: CheckoutOrderResponse1;
  /**
   * Details about the payment method used in the transaction. Only returned if `resultCode` is
   * **Authorised**.
   */
  paymentMethod?: PaymentResponse1;
  /**
   * The object that contains the validation outcomes. Only returned if `resultCode` is
   * **Authorised** and if you have requested a payment validation in the request.
   */
  paymentValidations?: PaymentResponse2;
  /**
   * Adyen's 16-character string reference associated with the transaction/request. This value is
   * globally unique; quote it when communicating with us about this request.
   *
   * > For payment methods that require a redirect or additional action, you will get this value in
   * the `/payments/details` response.
   */
  pspReference?: string;
  /**
   * If the payment's authorisation is refused or an error occurs during authorisation, this field
   * holds Adyen's mapped reason for the refusal or a description of the error. When a transaction
   * fails, the authorisation response includes `resultCode` and `refusalReason` values.
   *
   * For more information, see [Refusal
   * reasons](https://docs.adyen.com/development-resources/refusal-reasons).
   */
  refusalReason?: string;
  /**
   * Code that specifies the refusal reason. For more information, see [Authorisation refusal
   * reasons](https://docs.adyen.com/development-resources/refusal-reasons).
   */
  refusalReasonCode?: string;
  /**
   * The result of the payment. For more information, see [Result
   * codes](https://docs.adyen.com/online-payments/payment-result-codes).
   *
   * Possible values:
   *
   * * **AuthenticationFinished** – The payment has been successfully authenticated with 3D Secure
   *   2. Returned for 3D Secure 2 authentication-only transactions.
   * * **AuthenticationNotRequired** – The transaction does not require 3D Secure authentication.
   *   Returned for [standalone authentication-only
   *   integrations](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only).
   * * **Authorised** – The payment was successfully authorised. This state serves as an indicator
   *   to proceed with the delivery of goods and services. This is a final state.
   * * **Cancelled** – Indicates the payment has been cancelled (either by the shopper or the
   *   merchant) before processing was completed. This is a final state.
   * * **ChallengeShopper** – The issuer requires further shopper interaction before the payment can
   *   be authenticated. Returned for 3D Secure 2 transactions.
   * * **Error** – There was an error when the payment was being processed. The reason is given in
   *   the `refusalReason` field. This is a final state.
   * * **IdentifyShopper** – The issuer requires the shopper's device fingerprint before the payment
   *   can be authenticated. Returned for 3D Secure 2 transactions.
   * * **PartiallyAuthorised** – The payment has been authorised for a partial amount. This happens
   *   for card payments when the merchant supports Partial Authorisations and the cardholder has
   *   insufficient funds.
   * * **Pending** – Indicates that it is not possible to obtain the final status of the payment.
   *   This can happen if the systems providing final status information for the payment are
   *   unavailable, or if the shopper needs to take further action to complete the payment.
   * * **PresentToShopper** – Indicates that the response contains additional information that you
   *   need to present to a shopper, so that they can use it to complete a payment.
   * * **Received** – Indicates the payment has successfully been received by Adyen, and will be
   *   processed. This is the initial state for all payments.
   * * **RedirectShopper** – Indicates the shopper should be redirected to an external web page or
   *   app to complete the authorisation.
   * * **Refused** – Indicates the payment was refused. The reason is given in the `refusalReason`
   *   field. This is a final state.
   */
  resultCode?: ResultCode1;
  /** Response of the 3D Secure 2 authentication. */
  threeDs2ResponseData?: ThreeDs2ResponseData1;
  /** Result of the 3D Secure 2 authentication. */
  threeDs2Result?: ThreeDs2Result1;
  /**
   * When non-empty, contains a value that you must submit to the `/payments/details` endpoint as
   * `paymentData`.
   */
  threeDsPaymentData?: string;
};

export const paymentResponse9Schema: Schema<PaymentResponse9> = s.object<PaymentResponse9>({
  action: s.optional(s.lazy(() => action11Schema)),
  additionalData: s.optional(s.record(s.string(), s.string())),
  amount: s.optional(s.lazy(() => amount26Schema)),
  donationToken: s.optional(s.string()),
  fraudResult: s.optional(s.lazy(() => fraudResult1Schema)),
  merchantReference: s.optional(s.string()),
  order: s.optional(s.lazy(() => checkoutOrderResponse1Schema)),
  paymentMethod: s.optional(s.lazy(() => paymentResponse1Schema)),
  paymentValidations: s.optional(s.lazy(() => paymentResponse2Schema)),
  pspReference: s.optional(s.string()),
  refusalReason: s.optional(s.string()),
  refusalReasonCode: s.optional(s.string()),
  resultCode: s.optional(s.lazy(() => resultCode1Schema)),
  threeDs2ResponseData: s.optional(s.lazy(() => threeDs2ResponseData1Schema)),
  threeDs2Result: s.optional(s.lazy(() => threeDs2Result1Schema)),
  threeDsPaymentData: s.optional(s.string()),
  _keysMap: {
    threeDs2ResponseData: "threeDS2ResponseData",
    threeDs2Result: "threeDS2Result",
    threeDsPaymentData: "threeDSPaymentData",
  },
});
