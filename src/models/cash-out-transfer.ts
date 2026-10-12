import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";
import { type121Schema, type Type121 } from "./type121.js";

export type CashOutTransfer = {
  /**
   * The amount of the cashout instruction transaction, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes).
   */
  amount: Amount17;
  /** The reference of the cashout transfer. */
  id: string;
  /**
   * The type of the cashout transfer.
   *
   * Possible values:
   * - **cashoutRepayment**: Corresponds to the transfer created to deduct the cashout amount after
   *   settlement.
   * - **cashoutFee**: Corresponds to the transfer created to debit the cashout fee form the user's
   *   balance account.
   */
  type: Type121;
};

export const cashOutTransferSchema: Schema<CashOutTransfer> = s.object<CashOutTransfer>({
  amount: amount17Schema,
  id: s.string(),
  type: type121Schema,
});
