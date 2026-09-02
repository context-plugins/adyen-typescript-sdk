import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fundingSourceSchema, type FundingSource } from "./funding-source.js";
import { type74Schema, type Type74 } from "./type74.js";

export type VisaCheckout = {
  checkoutAttemptId?: string;
  fundingSource?: FundingSource;
  sdkData?: string;
  type?: Type74;
  visaCheckoutCallId: string;
};

export const visaCheckoutSchema: Schema<VisaCheckout> = s.object<VisaCheckout>({
  checkoutAttemptId: s.optional(s.string()),
  fundingSource: s.optional(s.lazy(() => fundingSourceSchema)),
  sdkData: s.optional(s.string()),
  type: s.optional(s.lazy(() => type74Schema)),
  visaCheckoutCallId: s.string(),
});
