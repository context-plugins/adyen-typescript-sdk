import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of balance transfer. Possible values: **tax**, **fee**, **terminalSale**, **credit**,
 * **debit**, and **adjustment**.
 */
export const BalanceTransferType2 = {
  Tax: "tax",
  Fee: "fee",
  TerminalSale: "terminalSale",
  Credit: "credit",
  Debit: "debit",
  Adjustment: "adjustment",
} as const;
export type BalanceTransferType2 =
  | (typeof BalanceTransferType2)[keyof typeof BalanceTransferType2]
  | (string & {});

export const balanceTransferType2Schema: EnumSchema<BalanceTransferType2> =
  s.enumOf<BalanceTransferType2>(BalanceTransferType2);
