import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Destination = {
  countryCode?: string;
  postalCode?: string;
  stateOrProvince?: string;
};

export const destinationSchema: Schema<Destination> = s.object<Destination>({
  countryCode: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  stateOrProvince: s.optional(s.string()),
});
