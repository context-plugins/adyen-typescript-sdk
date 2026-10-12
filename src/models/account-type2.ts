import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The bank account type.
 *
 * Possible values: **checking** or **savings**. Defaults to **checking**.
 */
export const AccountType2 = {
  Checking: "checking",
  Savings: "savings",
} as const;
export type AccountType2 = (typeof AccountType2)[keyof typeof AccountType2] | (string & {});

export const accountType2Schema: EnumSchema<AccountType2> = s.enumOf<AccountType2>(AccountType2);
