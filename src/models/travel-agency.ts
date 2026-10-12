import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TravelAgency = {
  /**
   * The unique identifier from IATA or ARC for the travel agency that issues the ticket.
   * * Encoding: ASCII
   * * minLength: 1 character
   * * maxLength: 8 characters
   * * Must not start with a space or be all spaces.
   * * Must not be all zeros.
   * * **additionalData key:** `airline.travel_agency_code`
   */
  code?: string;
  /**
   * The name of the travel agency.
   *
   * * Encoding: ASCII
   * * minLength: 1 character
   * * maxLength: 25 characters
   * * Must not start with a space or be all spaces.
   * * Must not be all zeros.
   * * **additionalData key:** `airline.travel_agency_name`
   */
  name?: string;
};

export const travelAgencySchema: Schema<TravelAgency> = s.object<TravelAgency>({
  code: s.optional(s.string()),
  name: s.optional(s.string()),
});
