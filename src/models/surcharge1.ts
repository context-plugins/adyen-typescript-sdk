import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { configurationSchema, type Configuration } from "./configuration.js";

export type Surcharge1 = {
  askConfirmation?: boolean;
  configurations?: Configuration[];
  disclosureOnPresentCard?: boolean;
  excludeGratuityFromSurcharge?: boolean;
};

export const surcharge1Schema: Schema<Surcharge1> = s.object<Surcharge1>({
  askConfirmation: s.optional(s.boolean()),
  configurations: s.optional(s.array(s.lazy(() => configurationSchema))),
  disclosureOnPresentCard: s.optional(s.boolean()),
  excludeGratuityFromSurcharge: s.optional(s.boolean()),
});
