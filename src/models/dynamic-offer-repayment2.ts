import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { repaymentTermSchema, type RepaymentTerm } from "./repayment-term.js";

/** Contains information about the repayment configuration of the grant. */
export type DynamicOfferRepayment2 = {
  /**
   * Contains information about the time period in which your user must repay the total amount of
   * the grant.
   */
  term: RepaymentTerm;
};

export const dynamicOfferRepayment2Schema: Schema<DynamicOfferRepayment2> = s.object<DynamicOfferRepayment2>({
  term: repaymentTermSchema,
});
