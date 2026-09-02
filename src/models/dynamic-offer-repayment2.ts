import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { repaymentTermSchema, type RepaymentTerm } from "./repayment-term.js";

export type DynamicOfferRepayment2 = {
  term: RepaymentTerm;
};

export const dynamicOfferRepayment2Schema: Schema<DynamicOfferRepayment2> = s.object<DynamicOfferRepayment2>({
  term: repaymentTermSchema,
});
