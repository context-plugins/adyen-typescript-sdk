import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type10, type10Schema } from "./type10.js";

export type BacsDirectDebit = {
  /** The bank account number (without separators). */
  bankAccountNumber?: string;
  /** The bank routing number of the account. */
  bankLocationId?: string;
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  /** The name of the bank account holder. */
  holderName?: string;
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
  /**
   * The unique identifier of your user's verified transfer instrument, which you can use to top up
   * their balance accounts.
   */
  transferInstrumentId?: string;
  /** **directdebit_GB** @default Type10.DirectdebitGb */
  type?: Type10;
};

export const bacsDirectDebitSchema: Schema<BacsDirectDebit> = s.object<BacsDirectDebit>({
  bankAccountNumber: s.optional(s.string()),
  bankLocationId: s.optional(s.string()),
  checkoutAttemptId: s.optional(s.string()),
  holderName: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  transferInstrumentId: s.optional(s.string()),
  type: s.defaulted(type10Schema, Type10.DirectdebitGb),
});
