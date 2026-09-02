import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BalanceTransferType = {
  Tax: "tax",
  Fee: "fee",
  TerminalSale: "terminalSale",
  Credit: "credit",
  Debit: "debit",
  Adjustment: "adjustment",
} as const;
export type BalanceTransferType =
  | (typeof BalanceTransferType)[keyof typeof BalanceTransferType]
  | (string & {});

export const balanceTransferTypeSchema: EnumSchema<BalanceTransferType> =
  s.enumOf<BalanceTransferType>(BalanceTransferType);
