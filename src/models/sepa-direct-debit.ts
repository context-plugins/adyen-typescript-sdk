import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type51, type51Schema } from "./type51.js";

export type SepaDirectDebit = {
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  /** The date that the the shopper's bank account is charged. */
  dueDate?: string;
  /** The International Bank Account Number (IBAN). */
  iban: string;
  /** The name of the bank account holder. */
  ownerName: string;
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
  /** **sepadirectdebit** @default Type51.Sepadirectdebit */
  type?: Type51;
};

export const sepaDirectDebitSchema: Schema<SepaDirectDebit> = s.object<SepaDirectDebit>({
  checkoutAttemptId: s.optional(s.string()),
  dueDate: s.optional(s.string()),
  iban: s.string(),
  ownerName: s.string(),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  transferInstrumentId: s.optional(s.string()),
  type: s.defaulted(type51Schema, Type51.Sepadirectdebit),
});
