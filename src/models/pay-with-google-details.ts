import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fundingSourceSchema, type FundingSource } from "./funding-source.js";
import { type34Schema, type Type34 } from "./type34.js";

export type PayWithGoogleDetails = {
  checkoutAttemptId?: string;
  fundingSource?: FundingSource;
  googlePayToken: string;
  recurringDetailReference?: string;
  sdkData?: string;
  storedPaymentMethodId?: string;
  threeDs2SdkVersion?: string;
  type?: Type34;
};

export const payWithGoogleDetailsSchema: Schema<PayWithGoogleDetails> = s.object<PayWithGoogleDetails>({
  checkoutAttemptId: s.optional(s.string()),
  fundingSource: s.optional(s.lazy(() => fundingSourceSchema)),
  googlePayToken: s.string(),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  threeDs2SdkVersion: s.optional(s.string()),
  type: s.optional(s.lazy(() => type34Schema)),
  _keysMap: {
    threeDs2SdkVersion: "threeDS2SdkVersion",
  },
});
