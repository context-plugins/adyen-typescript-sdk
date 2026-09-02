import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";

export type DetailBalance3 = {
  balance?: Amount[];
  onHoldBalance?: Amount[];
  pendingBalance?: Amount[];
};

export const detailBalance3Schema: Schema<DetailBalance3> = s.object<DetailBalance3>({
  balance: s.optional(s.array(s.lazy(() => amountSchema))),
  onHoldBalance: s.optional(s.array(s.lazy(() => amountSchema))),
  pendingBalance: s.optional(s.array(s.lazy(() => amountSchema))),
});
