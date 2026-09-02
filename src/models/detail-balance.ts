import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";

export type DetailBalance = {
  balance?: Amount[];
  onHoldBalance?: Amount[];
  pendingBalance?: Amount[];
};

export const detailBalanceSchema: Schema<DetailBalance> = s.object<DetailBalance>({
  balance: s.optional(s.array(s.lazy(() => amountSchema))),
  onHoldBalance: s.optional(s.array(s.lazy(() => amountSchema))),
  pendingBalance: s.optional(s.array(s.lazy(() => amountSchema))),
});
