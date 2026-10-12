import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";

export type DetailBalance = {
  /** The list of balances held by the account. */
  balance?: Amount[];
  /** The list of on hold balances held by the account. */
  onHoldBalance?: Amount[];
  /** The list of pending balances held by the account. */
  pendingBalance?: Amount[];
};

export const detailBalanceSchema: Schema<DetailBalance> = s.object<DetailBalance>({
  balance: s.optional(s.array(s.lazy(() => amountSchema))),
  onHoldBalance: s.optional(s.array(s.lazy(() => amountSchema))),
  pendingBalance: s.optional(s.array(s.lazy(() => amountSchema))),
});
