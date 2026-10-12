import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { applicationInfoSchema, type ApplicationInfo } from "./application-info.js";

export type PaymentReversalRequest = {
  /**
   * Information about your application. For more details, see [Building Adyen
   * solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).
   */
  applicationInfo?: ApplicationInfo;
  /** The merchant account that is used to process the payment. */
  merchantAccount: string;
  /** Your reference for the reversal request. Maximum length: 80 characters. */
  reference?: string;
};

export const paymentReversalRequestSchema: Schema<PaymentReversalRequest> = s.object<PaymentReversalRequest>({
  applicationInfo: s.optional(s.lazy(() => applicationInfoSchema)),
  merchantAccount: s.string(),
  reference: s.optional(s.string()),
});
