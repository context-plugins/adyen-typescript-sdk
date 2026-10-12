import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { repaymentTermSchema, type RepaymentTerm } from "./repayment-term.js";

export type DynamicOfferRepayment = {
  /**
   * Contains information about the time period in which your user must repay the total amount of
   * the grant.
   */
  term: RepaymentTerm;
};

export const dynamicOfferRepaymentSchema: Schema<DynamicOfferRepayment> = s.object<DynamicOfferRepayment>({
  term: repaymentTermSchema,
});
