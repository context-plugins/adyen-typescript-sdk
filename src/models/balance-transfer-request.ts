import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";
import { balanceTransferType2Schema, type BalanceTransferType2 } from "./balance-transfer-type2.js";

export type BalanceTransferRequest = {
  /** The amount of the transfer. */
  amount: Amount17;
  /** The unique identifier of the source merchant account from which funds are deducted. */
  fromMerchant: string;
  /** A reference for the balance transfer. Maximum length: 80 characters. */
  reference?: string;
  /** The unique identifier of the destination merchant account to which funds are transferred. */
  toMerchant: string;
  /**
   * The type of balance transfer. Possible values: **tax**, **fee**, **terminalSale**, **credit**,
   * **debit**, and **adjustment**.
   */
  type: BalanceTransferType2;
};

export const balanceTransferRequestSchema: Schema<BalanceTransferRequest> = s.object<BalanceTransferRequest>({
  amount: amount17Schema,
  fromMerchant: s.string(),
  reference: s.optional(s.string()),
  toMerchant: s.string(),
  type: balanceTransferType2Schema,
});
