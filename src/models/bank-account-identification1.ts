import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Contains the identification information of the account to which you can transfer funds related to
 * repayments.
 */
export type BankAccountIdentification1 = {
  type?: string;
};

export const bankAccountIdentification1Schema: Schema<BankAccountIdentification1> =
  s.object<BankAccountIdentification1>({
    type: s.optional(s.string()),
  });
