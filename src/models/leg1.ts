import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Leg1 = {
  /**
   * The IATA 3-letter airport code of the destination airport. This field is required if the
   * airline data includes leg details.
   */
  arrivalAirportCode?: string;
  /** The basic fare code for this leg. */
  basicFareCode?: string;
  /** IATA code of the carrier operating the flight. */
  carrierCode?: string;
  /**
   * The IATA three-letter airport code of the departure airport. This field is required if the
   * airline data includes leg details
   */
  departureAirportCode?: string;
  /** The flight departure date. */
  departureDate?: string;
  /** The flight identifier. */
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
