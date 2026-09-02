import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { summarySchema, type Summary } from "./summary.js";

export type TaxFormSummaryResponse = {
  data: Summary[];
};

export const taxFormSummaryResponseSchema: Schema<TaxFormSummaryResponse> = s.object<TaxFormSummaryResponse>({
  data: s.array(s.lazy(() => summarySchema)),
});
