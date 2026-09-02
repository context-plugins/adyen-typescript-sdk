import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Leg1 = {
  arrivalAirportCode?: string;
  basicFareCode?: string;
  carrierCode?: string;
  departureAirportCode?: string;
  departureDate?: string;
  flightNumber?: string;
};

export const leg1Schema: Schema<Leg1> = s.object<Leg1>({
  arrivalAirportCode: s.optional(s.string()),
  basicFareCode: s.optional(s.string()),
  carrierCode: s.optional(s.string()),
  departureAirportCode: s.optional(s.string()),
  departureDate: s.optional(s.string()),
  flightNumber: s.optional(s.string()),
});
