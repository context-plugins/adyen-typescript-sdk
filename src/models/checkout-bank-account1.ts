import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountType1Schema, type AccountType1 } from "./account-type1.js";

/**
 * The details of the bank account, from which the payment should be made. > Either `bankAccount` or
 * `card` field must be provided in a payment request.
 */
export type CheckoutBankAccount1 = {
  /** The type of the bank account. */
  accountType?: AccountType1;
  /** The bank account number (without separators). */
  bankAccountNumber?: string;
  /** The bank city. */
  bankCity?: string;
  /** The location id of the bank. The field value is `nil` in most cases. */
  bankLocationId?: string;
  /** The name of the bank. */
  bankName?: string;
  /**
   * The [Business Identifier Code](https://en.wikipedia.org/wiki/ISO_9362) (BIC) is the SWIFT
   * address assigned to a bank. The field value is `nil` in most cases.
   */
  bic?: string;
  /**
   * Country code where the bank is located.
   *
   * A valid value is an ISO two-character country code (e.g. 'NL').
   */
  countryCode?: string;
  /**
   * The [International Bank Account
   * Number](https://en.wikipedia.org/wiki/International_Bank_Account_Number) (IBAN).
   */
  iban?: string;
  /**
   * The name of the bank account holder. If you submit a name with non-Latin characters, we
   * automatically replace some of them with corresponding Latin characters to meet the FATF
   * recommendations. For example:
   * * χ12 is converted to ch12.
   * * üA is converted to euA.
   * * Peter Møller is converted to Peter Mller, because banks don't accept 'ø'. After replacement,
   *   the ownerName must have at least three alphanumeric characters (A-Z, a-z, 0-9), and at least
   *   one of them must be a valid Latin character (A-Z, a-z). For example:
   * * John17 - allowed.
   * * J17 - allowed.
   * * 171 - not allowed.
   * * John-7 - allowed. > If provided details don't match the required format, the response returns
   *   the error message: 203 'Invalid bank account holder name'.
   */
  ownerName?: string;
  /** The bank account holder's tax ID. */
  taxId?: string;
};

export const checkoutBankAccount1Schema: Schema<CheckoutBankAccount1> = s.object<CheckoutBankAccount1>({
  accountType: s.optional(s.lazy(() => accountType1Schema)),
  bankAccountNumber: s.optional(s.string()),
  bankCity: s.optional(s.string()),
  bankLocationId: s.optional(s.string()),
  bankName: s.optional(s.string()),
  bic: s.optional(s.string()),
  countryCode: s.optional(s.string()),
  iban: s.optional(s.string()),
  ownerName: s.optional(s.string()),
  taxId: s.optional(s.string()),
});
