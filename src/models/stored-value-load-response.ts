import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";
import { resultCode5Schema, type ResultCode5 } from "./result-code5.js";

export type StoredValueLoadResponse = {
  authCode?: string;
  currentBalance?: Amount;
  pspReference?: string;
  refusalReason?: string;
  resultCode?: ResultCode5;
  thirdPartyRefusalReason?: string;
};

export const storedValueLoadResponseSchema: Schema<StoredValueLoadResponse> =
  s.object<StoredValueLoadResponse>({
    authCode: s.optional(s.string()),
    currentBalance: s.optional(s.lazy(() => amountSchema)),
    pspReference: s.optional(s.string()),
    refusalReason: s.optional(s.string()),
    resultCode: s.optional(s.lazy(() => resultCode5Schema)),
    thirdPartyRefusalReason: s.optional(s.string()),
  });
