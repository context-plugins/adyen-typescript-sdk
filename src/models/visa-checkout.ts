import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fundingSourceSchema, type FundingSource } from "./funding-source.js";
import { Type55, type55Schema } from "./type55.js";

export type VisaCheckout = {
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  /**
   * The funding source that should be used when multiple sources are available. For Brazilian combo
   * cards, by default the funding source is credit. To use debit, set this value to **debit**.
   */
  fundingSource?: FundingSource;
  /** Base64-encoded JSON object containing SDK related parameters required by the SDK */
  sdkData?: string;
  /** **visacheckout** @default Type55.Visacheckout */
  type?: Type55;
  /**
   * The Visa Click to Pay Call ID value. When your shopper selects a payment and/or a shipping
   * address from Visa Click to Pay, you will receive a Visa Click to Pay Call ID.
   */
  visaCheckoutCallId: string;
};

export const visaCheckoutSchema: Schema<VisaCheckout> = s.object<VisaCheckout>({
  checkoutAttemptId: s.optional(s.string()),
  fundingSource: s.optional(s.lazy(() => fundingSourceSchema)),
  sdkData: s.optional(s.string()),
  type: s.defaulted(type55Schema, Type55.Visacheckout),
  visaCheckoutCallId: s.string(),
});
