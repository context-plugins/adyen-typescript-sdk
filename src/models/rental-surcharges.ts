import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RentalSurcharges = {
  fuel?: number;
  insurance?: number;
  oneWayDropOff?: number;
};

export const rentalSurchargesSchema: Schema<RentalSurcharges> = s.object<RentalSurcharges>({
  fuel: s.optional(s.number()),
  insurance: s.optional(s.number()),
  oneWayDropOff: s.optional(s.number()),
});
