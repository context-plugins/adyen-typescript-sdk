import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { applicationInfoSchema, type ApplicationInfo } from "./application-info.js";

export type StandalonePaymentCancelRequest = {
  /**
   * Information about your application. For more details, see [Building Adyen
   * solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).
   */
  applicationInfo?: ApplicationInfo;
  /** The merchant account that is used to process the payment. */
  merchantAccount: string;
  /**
   * The
   * [`reference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__reqParam_reference)
   * of the payment that you want to cancel.
   */
  paymentReference: string;
  /** Your reference for the cancel request. Maximum length: 80 characters. */
  reference?: string;
};

export const standalonePaymentCancelRequestSchema: Schema<StandalonePaymentCancelRequest> =
  s.object<StandalonePaymentCancelRequest>({
    applicationInfo: s.optional(s.lazy(() => applicationInfoSchema)),
    merchantAccount: s.string(),
    paymentReference: s.string(),
    reference: s.optional(s.string()),
  });
