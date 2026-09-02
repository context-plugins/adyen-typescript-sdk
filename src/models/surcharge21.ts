import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { configurationSchema, type Configuration } from "./configuration.js";

export type Surcharge21 = {
  askConfirmation?: boolean;
  configurations?: Configuration[];
  disclosureOnPresentCard?: boolean;
  excludeGratuityFromSurcharge?: boolean;
};

export const surcharge21Schema: Schema<Surcharge21> = s.object<Surcharge21>({
  askConfirmation: s.optional(s.boolean()),
  configurations: s.optional(s.array(s.lazy(() => configurationSchema))),
  disclosureOnPresentCard: s.optional(s.boolean()),
  excludeGratuityFromSurcharge: s.optional(s.boolean()),
});
