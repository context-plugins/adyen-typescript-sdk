import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CountriesRestriction = {
  /** Defines how the condition must be evaluated. */
  operation: string;
  /**
   * List of two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
   * country codes.
   */
  value?: string[];
};

export const countriesRestrictionSchema: Schema<CountriesRestriction> = s.object<CountriesRestriction>({
  operation: s.string(),
  value: s.optional(s.array(s.string())),
});
