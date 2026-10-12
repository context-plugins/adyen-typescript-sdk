import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { summarySchema, type Summary } from "./summary.js";

export type TaxFormSummaryResponse = {
  /**
   * A list of tax form summaries, where each summary consists of the legal entity and the tax years
   * in which the legal entity has a tax form.
   */
  data: Summary[];
};

export const taxFormSummaryResponseSchema: Schema<TaxFormSummaryResponse> = s.object<TaxFormSummaryResponse>({
  data: s.array(s.lazy(() => summarySchema)),
});
