import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subMerchantData21Schema, type SubMerchantData21 } from "./sub-merchant-data21.js";

export type CertificateLoadingRequest = {
  /** The unique identifier of your merchant account. */
  merchantAccount: string;
  /**
   * The setup token provided by the SDK in a Mobile solution for in-person payments.
   * - When using the Android SDK, obtain the token through the
   *   `MerchantAuthenticationService.authenticate(setupToken)` callback of `AuthenticationService`.
   * - When using the iOS SDK, obtain the token through the `PaymentServiceDelegate.register(with:)`
   *   callback of `PaymentServiceDelegate`.
   */
  setupToken: string;
  /**
   * The reference of the store that you want to process transactions for. Do not include this
   * parameter if your account structure uses merchant accounts as stores, or if you are a
   * registered payment facilitator.
   */
  store?: string;
  /**
   * The details of the sub-merchant that you want to process transactions for.Required if you are a
   * registered payment facilitator. Do not include this parameter if you are not a payment
   * facilitator.
   */
  subMerchantData?: SubMerchantData21;
};

export const certificateLoadingRequestSchema: Schema<CertificateLoadingRequest> =
  s.object<CertificateLoadingRequest>({
    merchantAccount: s.string(),
    setupToken: s.string(),
    store: s.optional(s.string()),
    subMerchantData: s.optional(s.lazy(() => subMerchantData21Schema)),
  });
