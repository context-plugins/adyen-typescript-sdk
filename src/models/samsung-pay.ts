import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fundingSourceSchema, type FundingSource } from "./funding-source.js";
import { type66Schema, type Type66 } from "./type66.js";

export type SamsungPay = {
  checkoutAttemptId?: string;
  fundingSource?: FundingSource;
  recurringDetailReference?: string;
  samsungPayToken: string;
  sdkData?: string;
  storedPaymentMethodId?: string;
  type?: Type66;
};

export const samsungPaySchema: Schema<SamsungPay> = s.object<SamsungPay>({
  checkoutAttemptId: s.optional(s.string()),
  fundingSource: s.optional(s.lazy(() => fundingSourceSchema)),
  recurringDetailReference: s.optional(s.string()),
  samsungPayToken: s.string(),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: s.optional(s.lazy(() => type66Schema)),
});
