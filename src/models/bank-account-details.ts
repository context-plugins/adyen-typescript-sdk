import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BankAccountDetails = {
  /** The bank account number, without separators or whitespace. */
  accountNumber?: string;
  /**
   * The bank account type.
   *
   * Possible values: **checking** or **savings**. Defaults to **checking**.
   *
   * @default "checking"
   */
  accountType?: string;
  /** The bank account branch number, without separators or whitespace */
  branchNumber?: string;
  /**
   * Business accounts with a `formFactor` value of **physical** are business accounts issued under
   * the central bank of that country. The default value is **physical** for NL, US, and UK business
   * accounts.
   *
   * Adyen creates a local IBAN for business accounts when the `formFactor` value is set to
   * **virtual**. The local IBANs that are supported are for DE and FR, which reference a physical
   * NL account, with funds being routed through the central bank of NL.
   *
   * @default "physical"
   */
  formFactor?: string;
  /**
   * The international bank account number as defined in the
   * [ISO-13616](https://www.iso.org/standard/81090.html) standard.
   */
  iban?: string;
  /**
   * The [routing number](https://en.wikipedia.org/wiki/ABA_routing_transit_number), without
   * separators or whitespace.
   */
  routingNumber?: string;
  /** The [sort code](https://en.wikipedia.org/wiki/Sort_code), without separators or whitespace. */
  sortCode?: string;
  /** **iban** or **usLocal** or **ukLocal** @default "iban" */
  type?: string;
};

export const bankAccountDetailsSchema: Schema<BankAccountDetails> = s.object<BankAccountDetails>({
  accountNumber: s.optional(s.string()),
  accountType: s.defaulted(s.string(), "checking"),
  branchNumber: s.optional(s.string()),
  formFactor: s.defaulted(s.string(), "physical"),
  iban: s.optional(s.string()),
  routingNumber: s.optional(s.string()),
  sortCode: s.optional(s.string()),
  type: s.defaulted(s.string(), "iban"),
});
