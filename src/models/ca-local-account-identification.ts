import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { AccountType2, accountType2Schema } from "./account-type2.js";

export type CaLocalAccountIdentification = {
  /** The 5- to 12-digit bank account number, without separators or whitespace. */
  accountNumber: string;
  /**
   * The bank account type.
   *
   * Possible values: **checking** or **savings**. Defaults to **checking**.
   *
   * @default AccountType2.Checking
   */
  accountType?: AccountType2;
  /** The 3-digit institution number, without separators or whitespace. */
  institutionNumber: string;
  /** The 5-digit transit number, without separators or whitespace. */
  transitNumber: string;
  /** **caLocal** @default "caLocal" */
  type?: "caLocal";
};

export const caLocalAccountIdentificationSchema: Schema<CaLocalAccountIdentification> =
  s.object<CaLocalAccountIdentification>({
    accountNumber: s.string(),
    accountType: s.defaulted(accountType2Schema, AccountType2.Checking),
    institutionNumber: s.string(),
    transitNumber: s.string(),
    type: s.defaulted(s.literal("caLocal"), "caLocal"),
  });
