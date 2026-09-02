import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";
import { fraudResult2Schema, type FraudResult2 } from "./fraud-result2.js";
import { resultCode3Schema, type ResultCode3 } from "./result-code3.js";

export type PayoutResponse = {
  additionalData?: Record<string, string>;
  authCode?: string;
  dccAmount?: Amount;
  dccSignature?: string;
  fraudResult?: FraudResult2;
  issuerUrl?: string;
  md?: string;
  paRequest?: string;
  pspReference?: string;
  refusalReason?: string;
  resultCode?: ResultCode3;
};

export const payoutResponseSchema: Schema<PayoutResponse> = s.object<PayoutResponse>({
  additionalData: s.optional(s.record(s.string(), s.string())),
  authCode: s.optional(s.string()),
  dccAmount: s.optional(s.lazy(() => amountSchema)),
  dccSignature: s.optional(s.string()),
  fraudResult: s.optional(s.lazy(() => fraudResult2Schema)),
  issuerUrl: s.optional(s.string()),
  md: s.optional(s.string()),
  paRequest: s.optional(s.string()),
  pspReference: s.optional(s.string()),
  refusalReason: s.optional(s.string()),
  resultCode: s.optional(s.lazy(() => resultCode3Schema)),
});
