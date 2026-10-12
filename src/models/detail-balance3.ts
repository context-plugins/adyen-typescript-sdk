import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";

/** Details of the balance held by the account. */
export type DetailBalance3 = {
  /** The list of balances held by the account. */
  balance?: Amount[];
  /** The list of on hold balances held by the account. */
  onHoldBalance?: Amount[];
  /** The list of pending balances held by the account. */
  pendingBalance?: Amount[];
};

export const detailBalance3Schema: Schema<DetailBalance3> = s.object<DetailBalance3>({
  balance: s.optional(s.array(s.lazy(() => amountSchema))),
  onHoldBalance: s.optional(s.array(s.lazy(() => amountSchema))),
  pendingBalance: s.optional(s.array(s.lazy(() => amountSchema))),
});
