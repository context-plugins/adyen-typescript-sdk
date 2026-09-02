import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type37Schema, type Type37 } from "./type37.js";

export type EBankingFinland = {
  checkoutAttemptId?: string;
  issuer?: string;
  sdkData?: string;
  type: Type37;
};

export const eBankingFinlandSchema: Schema<EBankingFinland> = s.object<EBankingFinland>({
  checkoutAttemptId: s.optional(s.string()),
  issuer: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  type: type37Schema,
});
