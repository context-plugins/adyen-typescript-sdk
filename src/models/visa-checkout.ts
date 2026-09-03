import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fundingSourceSchema, type FundingSource } from "./funding-source.js";
import { type55Schema, type Type55 } from "./type55.js";

export type VisaCheckout = {
  checkoutAttemptId?: string;
  fundingSource?: FundingSource;
  sdkData?: string;
  type?: Type55;
  visaCheckoutCallId: string;
};

export const visaCheckoutSchema: Schema<VisaCheckout> = s.object<VisaCheckout>({
  checkoutAttemptId: s.optional(s.string()),
  fundingSource: s.optional(s.lazy(() => fundingSourceSchema)),
  sdkData: s.optional(s.string()),
  type: s.optional(s.lazy(() => type55Schema)),
  visaCheckoutCallId: s.string(),
});
