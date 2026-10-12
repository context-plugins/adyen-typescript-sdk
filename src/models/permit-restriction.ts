import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";

export type PermitRestriction = {
  /**
   * The total sum amount of one or more payments made using this permit may not exceed this amount
   * if set.
   */
  maxAmount?: Amount;
  /** The amount of any single payment using this permit may not exceed this amount if set. */
  singleTransactionLimit?: Amount;
  /**
   * Only a single payment can be made using this permit if set to true, otherwise multiple payments
   * are allowed.
   */
  singleUse?: boolean;
};

export const permitRestrictionSchema: Schema<PermitRestriction> = s.object<PermitRestriction>({
  maxAmount: s.optional(s.lazy(() => amountSchema)),
  singleTransactionLimit: s.optional(s.lazy(() => amountSchema)),
  singleUse: s.optional(s.boolean()),
});
