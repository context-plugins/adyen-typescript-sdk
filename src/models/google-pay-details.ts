import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fundingSourceSchema, type FundingSource } from "./funding-source.js";
import { type32Schema, type Type32 } from "./type32.js";

export type GooglePayDetails = {
  checkoutAttemptId?: string;
  fundingSource?: FundingSource;
  googlePayCardNetwork?: string;
  googlePayToken: string;
  recurringDetailReference?: string;
  sdkData?: string;
  storedPaymentMethodId?: string;
  threeDs2SdkVersion?: string;
  type?: Type32;
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
  type: s.optional(s.lazy(() => type32Schema)),
  _keysMap: {
    threeDs2SdkVersion: "threeDS2SdkVersion",
  },
});
