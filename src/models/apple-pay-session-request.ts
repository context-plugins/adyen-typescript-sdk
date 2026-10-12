import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApplePaySessionRequest = {
  /**
   * This is the name that your shoppers will see in the Apple Pay interface.
   *
   * The value returned as `configuration.merchantName` field from the
   * [`/paymentMethods`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/paymentMethods)
   * response.
   */
  displayName: string;
  /**
   * The domain name you provided when you added Apple Pay in your Customer Area.
   *
   * This must match the `window.location.hostname` of the web shop.
   */
  domainName: string;
  /**
   * Your merchant identifier registered with Apple Pay.
   *
   * Use the value of the `configuration.merchantId` field from the
   * [`/paymentMethods`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/paymentMethods)
   * response.
   */
  merchantIdentifier: string;
};

export const applePaySessionRequestSchema: Schema<ApplePaySessionRequest> = s.object<ApplePaySessionRequest>({
  displayName: s.string(),
  domainName: s.string(),
  merchantIdentifier: s.string(),
});
