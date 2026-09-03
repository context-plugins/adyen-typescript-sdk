import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";
import { resultCode3Schema, type ResultCode3 } from "./result-code3.js";

export type StoredValueBalanceMergeResponse = {
  authCode?: string;
  currentBalance?: Amount;
  pspReference?: string;
  refusalReason?: string;
  resultCode?: ResultCode3;
  thirdPartyRefusalReason?: string;
};

export const storedValueBalanceMergeResponseSchema: Schema<StoredValueBalanceMergeResponse> =
  s.object<StoredValueBalanceMergeResponse>({
    authCode: s.optional(s.string()),
    currentBalance: s.optional(s.lazy(() => amountSchema)),
    pspReference: s.optional(s.string()),
    refusalReason: s.optional(s.string()),
    resultCode: s.optional(s.lazy(() => resultCode3Schema)),
    thirdPartyRefusalReason: s.optional(s.string()),
  });
