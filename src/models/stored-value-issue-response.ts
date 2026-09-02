import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";
import { resultCode5Schema, type ResultCode5 } from "./result-code5.js";

export type StoredValueIssueResponse = {
  authCode?: string;
  currentBalance?: Amount;
  paymentMethod?: Record<string, string>;
  pspReference?: string;
  refusalReason?: string;
  resultCode?: ResultCode5;
  thirdPartyRefusalReason?: string;
};

export const storedValueIssueResponseSchema: Schema<StoredValueIssueResponse> =
  s.object<StoredValueIssueResponse>({
    authCode: s.optional(s.string()),
    currentBalance: s.optional(s.lazy(() => amountSchema)),
    paymentMethod: s.optional(s.record(s.string(), s.string())),
    pspReference: s.optional(s.string()),
    refusalReason: s.optional(s.string()),
    resultCode: s.optional(s.lazy(() => resultCode5Schema)),
    thirdPartyRefusalReason: s.optional(s.string()),
  });
