import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";

export type PermitRestriction = {
  maxAmount?: Amount;
  singleTransactionLimit?: Amount;
  singleUse?: boolean;
};

export const permitRestrictionSchema: Schema<PermitRestriction> = s.object<PermitRestriction>({
  maxAmount: s.optional(s.lazy(() => amountSchema)),
  singleTransactionLimit: s.optional(s.lazy(() => amountSchema)),
  singleUse: s.optional(s.boolean()),
});
