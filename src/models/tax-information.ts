import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TaxInformation = {
  country?: string;
  number?: string;
  numberAbsent?: boolean;
  type?: string;
};

export const taxInformationSchema: Schema<TaxInformation> = s.object<TaxInformation>({
  country: s.optional(s.string()),
  number: s.optional(s.string()),
  numberAbsent: s.optional(s.boolean()),
  type: s.optional(s.string()),
});
