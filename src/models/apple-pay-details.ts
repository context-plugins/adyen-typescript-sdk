import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fundingSourceSchema, type FundingSource } from "./funding-source.js";
import { type7Schema, type Type7 } from "./type7.js";

export type ApplePayDetails = {
  applePayToken: string;
  checkoutAttemptId?: string;
  fundingSource?: FundingSource;
  recurringDetailReference?: string;
  sdkData?: string;
  storedPaymentMethodId?: string;
  type?: Type7;
};

export const applePayDetailsSchema: Schema<ApplePayDetails> = s.object<ApplePayDetails>({
  applePayToken: s.string(),
  checkoutAttemptId: s.optional(s.string()),
  fundingSource: s.optional(s.lazy(() => fundingSourceSchema)),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: s.optional(s.lazy(() => type7Schema)),
});
