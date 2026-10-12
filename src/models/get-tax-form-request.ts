import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GetTaxFormRequest = {
  /** The account holder code you provided when you created the account holder. */
  accountHolderCode: string;
  /** Type of the requested tax form. For example, 1099-K. */
  formType: string;
  /** Applicable tax year in the YYYY format. */
  year: number;
};

export const getTaxFormRequestSchema: Schema<GetTaxFormRequest> = s.object<GetTaxFormRequest>({
  accountHolderCode: s.string(),
  formType: s.string(),
  year: s.int(),
});
