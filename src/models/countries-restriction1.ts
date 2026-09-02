import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CountriesRestriction1 = {
  operation: string;
  value?: string[];
};

export const countriesRestriction1Schema: Schema<CountriesRestriction1> = s.object<CountriesRestriction1>({
  operation: s.string(),
  value: s.optional(s.array(s.string())),
});
