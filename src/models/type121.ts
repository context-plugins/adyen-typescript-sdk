import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of the cashout transfer.
 *
 * Possible values:
 * - **cashoutRepayment**: Corresponds to the transfer created to deduct the cashout amount after
 *   settlement.
 * - **cashoutFee**: Corresponds to the transfer created to debit the cashout fee form the user's
 *   balance account.
 */
export const Type121 = {
  CashoutRepayment: "cashoutRepayment",
  CashoutFee: "cashoutFee",
} as const;
export type Type121 = (typeof Type121)[keyof typeof Type121] | (string & {});

export const type121Schema: EnumSchema<Type121> = s.enumOf<Type121>(Type121);
