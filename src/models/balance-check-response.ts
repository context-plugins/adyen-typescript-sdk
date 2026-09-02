import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount8Schema, type Amount8 } from "./amount8.js";
import { amount9Schema, type Amount9 } from "./amount9.js";
import { fraudResult1Schema, type FraudResult1 } from "./fraud-result1.js";
import { resultCodeSchema, type ResultCode } from "./result-code.js";

export type BalanceCheckResponse = {
  additionalData?: Record<string, string>;
  balance: Amount8;
  fraudResult?: FraudResult1;
  pspReference?: string;
  refusalReason?: string;
  resultCode: ResultCode;
  transactionLimit?: Amount9;
};

export const balanceCheckResponseSchema: Schema<BalanceCheckResponse> = s.object<BalanceCheckResponse>({
  additionalData: s.optional(s.record(s.string(), s.string())),
  balance: amount8Schema,
  fraudResult: s.optional(s.lazy(() => fraudResult1Schema)),
  pspReference: s.optional(s.string()),
  refusalReason: s.optional(s.string()),
  resultCode: resultCodeSchema,
  transactionLimit: s.optional(s.lazy(() => amount9Schema)),
});
