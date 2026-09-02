import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Leg = {
  carrierCode?: string;
  classOfTravel?: string;
  dateOfTravel?: Date;
  departureAirportCode?: string;
  departureTax?: number;
  destinationAirportCode?: string;
  fareBasisCode?: string;
  flightNumber?: string;
  stopOverCode?: string;
};

export const legSchema: Schema<Leg> = s.object<Leg>({
  carrierCode: s.optional(s.string()),
  classOfTravel: s.optional(s.string()),
  dateOfTravel: s.optional(s.dateTime()),
  departureAirportCode: s.optional(s.string()),
  departureTax: s.optional(s.number()),
  destinationAirportCode: s.optional(s.string()),
  fareBasisCode: s.optional(s.string()),
  flightNumber: s.optional(s.string()),
  stopOverCode: s.optional(s.string()),
});
