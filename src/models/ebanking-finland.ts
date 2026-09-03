import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EBankingFinland = {
  checkoutAttemptId?: string;
  issuer?: string;
  sdkData?: string;
  type: "ebanking_FI";
};

export const eBankingFinlandSchema: Schema<EBankingFinland> = s.object<EBankingFinland>({
  checkoutAttemptId: s.optional(s.string()),
  issuer: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  type: s.literal("ebanking_FI"),
});
