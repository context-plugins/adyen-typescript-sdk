import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fundingSourceSchema, type FundingSource } from "./funding-source.js";
import { Type7, type7Schema } from "./type7.js";

export type ApplePayDonations = {
  /** The stringified and base64 encoded `paymentData` you retrieved from the Apple framework. */
  applePayToken: string;
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  /**
   * The funding source that should be used when multiple sources are available. For Brazilian combo
   * cards, by default the funding source is credit. To use debit, set this value to **debit**.
   */
  fundingSource?: FundingSource;
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
  /** **applepay** @default Type7.Applepay */
  type?: Type7;
};

export const applePayDonationsSchema: Schema<ApplePayDonations> = s.object<ApplePayDonations>({
  applePayToken: s.string(),
  checkoutAttemptId: s.optional(s.string()),
  fundingSource: s.optional(s.lazy(() => fundingSourceSchema)),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: s.defaulted(type7Schema, Type7.Applepay),
});
