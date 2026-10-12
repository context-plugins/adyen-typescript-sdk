import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type22, type22Schema } from "./type22.js";

export type DirectDebitAu = {
  /** The shopper's banking account number used to complete payment. */
  bankAccountNumber?: string;
  /** The shopper's BSB (their bank's branch code) number used to complete payment. */
  bankBranchCode?: string;
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  /** The name of the bank account holder. */
  holderName: string;
  /**
   * This is the `recurringDetailReference` returned in the response when you created the token.
   *
   * @deprecated
   */
  recurringDetailReference?: string;
  /** Base64-encoded JSON object containing SDK related parameters required by the SDK */
  sdkData?: string;
  /** This is the `recurringDetailReference` returned in the response when you created the token. */
  storedPaymentMethodId?: string;
  /** **directdebit_AU** @default Type22.DirectdebitAu */
  type?: Type22;
};

export const directDebitAuSchema: Schema<DirectDebitAu> = s.object<DirectDebitAu>({
  bankAccountNumber: s.optional(s.string()),
  bankBranchCode: s.optional(s.string()),
  checkoutAttemptId: s.optional(s.string()),
  holderName: s.string(),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: s.defaulted(type22Schema, Type22.DirectdebitAu),
});
