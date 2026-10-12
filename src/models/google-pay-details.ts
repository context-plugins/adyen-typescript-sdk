import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fundingSourceSchema, type FundingSource } from "./funding-source.js";
import { Type24, type24Schema } from "./type24.js";

export type GooglePayDetails = {
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  /**
   * The funding source that should be used when multiple sources are available. For Brazilian combo
   * cards, by default the funding source is credit. To use debit, set this value to **debit**.
   */
  fundingSource?: FundingSource;
  /** The selected payment card network. */
  googlePayCardNetwork?: string;
  /**
   * The `token` that you obtained from the [Google Pay
   * API](https://developers.google.com/pay/api/web/reference/response-objects#PaymentData)
   * `PaymentData` response.
   */
  googlePayToken: string;
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
  /** Required for mobile integrations. Version of the 3D Secure 2 mobile SDK. */
  threeDs2SdkVersion?: string;
  /** **googlepay**, **paywithgoogle** @default Type24.Googlepay */
  type?: Type24;
};

export const googlePayDetailsSchema: Schema<GooglePayDetails> = s.object<GooglePayDetails>({
  checkoutAttemptId: s.optional(s.string()),
  fundingSource: s.optional(s.lazy(() => fundingSourceSchema)),
  googlePayCardNetwork: s.optional(s.string()),
  googlePayToken: s.string(),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  threeDs2SdkVersion: s.optional(s.string()),
  type: s.defaulted(type24Schema, Type24.Googlepay),
  _keysMap: {
    threeDs2SdkVersion: "threeDS2SdkVersion",
  },
});
