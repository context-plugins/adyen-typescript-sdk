import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  accountIdentification21Schema,
  type AccountIdentification21,
} from "./unions/account-identification21.js";

/** Contains information about the legal entity's bank account. */
export type BankAccountInfo1 = {
  /** Identification of the bank account. */
  accountIdentification?: AccountIdentification21;
  /**
   * The type of bank account.
   *
   * @deprecated
   */
  accountType?: string;
  /** The name of the banking institution where the bank account is held. */
  bankName?: string;
  /**
   * The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
   * country code where the bank account is registered. For example, **NL**.
   */
  countryCode?: string;
  /**
   * Identifies if the bank account was created through [instant bank
   * verification](https://docs.adyen.com/release-notes/platforms-and-financial-products#releaseNote=2023-05-08-hosted-onboarding).
   */
  trustedSource?: boolean;
};

export const bankAccountInfo1Schema: Schema<BankAccountInfo1> = s.object<BankAccountInfo1>({
  accountIdentification: s.optional(s.lazy(() => accountIdentification21Schema)),
  accountType: s.optional(s.string()),
  bankName: s.optional(s.string()),
  countryCode: s.optional(s.string()),
  trustedSource: s.optional(s.boolean()),
});
