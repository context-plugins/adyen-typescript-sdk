import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountType2Schema, type AccountType2 } from "./account-type2.js";

/** All Of BankAccountIdentification, CALocalAccountIdentification1. */
export type CaLocalAccountIdentification1 = {
  /** **caLocal** @default "caLocal" */
  type?: string;
  /** The 5- to 12-digit bank account number, without separators or whitespace. */
  accountNumber: string;
  /**
   * The bank account type.
   *
   * Possible values: **checking** or **savings**. Defaults to **checking**.
   */
  accountType?: AccountType2;
  /** The 3-digit institution number, without separators or whitespace. */
  institutionNumber: string;
  /** The 5-digit transit number, without separators or whitespace. */
  transitNumber: string;
};

export const caLocalAccountIdentification1Schema: Schema<CaLocalAccountIdentification1> =
  s.object<CaLocalAccountIdentification1>({
    type: s.defaulted(s.string(), "caLocal"),
    accountNumber: s.string(),
    accountType: s.optional(s.lazy(() => accountType2Schema)),
    institutionNumber: s.string(),
    transitNumber: s.string(),
  });
