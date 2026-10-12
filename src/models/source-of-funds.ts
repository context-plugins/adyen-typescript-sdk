import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates where the funds used for the transfer originated. Possible values are:
 * - **DEBIT** for card-to-card transfers.
 * - **DEPOSIT_ACCOUNT** for wallet-to-card transfers.
 */
export const SourceOfFunds = {
  Debit: "DEBIT",
  DepositAccount: "DEPOSIT_ACCOUNT",
} as const;
export type SourceOfFunds = (typeof SourceOfFunds)[keyof typeof SourceOfFunds] | (string & {});

export const sourceOfFundsSchema: EnumSchema<SourceOfFunds> = s.enumOf<SourceOfFunds>(SourceOfFunds);
