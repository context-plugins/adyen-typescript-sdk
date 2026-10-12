import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { configurationSchema, type Configuration } from "./configuration.js";

export type Surcharge1 = {
  /** Show the surcharge details on the terminal, so the shopper can confirm. */
  askConfirmation?: boolean;
  /**
   * Surcharge fees or percentages for specific cards, funding sources (credit or debit), and
   * currencies.
   */
  configurations?: Configuration[];
  /** Show the maximum surcharge rate to the shopper on the present card screen before they tap. */
  disclosureOnPresentCard?: boolean;
  /** Exclude the tip amount from the surcharge calculation. */
  excludeGratuityFromSurcharge?: boolean;
};

export const surcharge1Schema: Schema<Surcharge1> = s.object<Surcharge1>({
  askConfirmation: s.optional(s.boolean()),
  configurations: s.optional(s.array(s.lazy(() => configurationSchema))),
  disclosureOnPresentCard: s.optional(s.boolean()),
  excludeGratuityFromSurcharge: s.optional(s.boolean()),
});
