import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EBankingFinland = {
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  /** The Ebanking Finland issuer value of the shopper's selected bank. */
  issuer?: string;
  /** Base64-encoded JSON object containing SDK related parameters required by the SDK */
  sdkData?: string;
  /** **ebanking_FI** @default "ebanking_FI" */
  type?: "ebanking_FI";
};

export const eBankingFinlandSchema: Schema<EBankingFinland> = s.object<EBankingFinland>({
  checkoutAttemptId: s.optional(s.string()),
  issuer: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  type: s.defaulted(s.literal("ebanking_FI"), "ebanking_FI"),
});
