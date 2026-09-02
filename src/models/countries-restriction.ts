import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CountriesRestriction = {
  operation: string;
  value?: string[];
};

export const countriesRestrictionSchema: Schema<CountriesRestriction> = s.object<CountriesRestriction>({
  operation: s.string(),
  value: s.optional(s.array(s.string())),
});
