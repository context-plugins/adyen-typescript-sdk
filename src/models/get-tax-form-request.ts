import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GetTaxFormRequest = {
  accountHolderCode: string;
  formType: string;
  year: number;
};

export const getTaxFormRequestSchema: Schema<GetTaxFormRequest> = s.object<GetTaxFormRequest>({
  accountHolderCode: s.string(),
  formType: s.string(),
  year: s.number(),
});
