import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Leg = {
  /**
   * The [IATA](https://www.iata.org/services/pages/codes.aspx) 2-letter accounting code (PAX) that
   * identifies the carrier. This field is required if the airline data includes leg details.
   * * Example: KLM = KL
   * * minLength: 2 characters
   * * maxLength: 2 characters
   * * Must not start with a space or be all spaces.
   * * Must not be all zeros.
   * * **additionalData key:** `airline.leg[N].carrier_code`
   */
  carrierCode?: string;
  /**
   * A one-letter travel class identifier. The following are common:
   *  * F: first class
   * * J: business class
   * * Y: economy class
   * * W: premium economy
   *
   * * Encoding: ASCII
   * * minLength: 1 character
   * * maxLength: 1 character
   * * Must not start with a space or be all spaces.
   * * Must not be all zeros.
   * * **additionalData key:** `airline.leg[N].class_of_travel`
   */
  classOfTravel?: string;
  /**
   * Date and time of travel in format `yyyy-MM-ddTHH:mm`.
   * * Use local time of departure airport.
   * * minLength: 16 characters
   * * maxLength: 16 characters
   * * **additionalData key:** `airline.leg[N].date_of_travel`
   */
  dateOfTravel?: Date;
  /**
   * The [IATA](https://www.iata.org/services/pages/codes.aspx) three-letter airport code of the
   * departure airport. This field is required if the airline data includes leg details.
   *
   * * Encoding: ASCII
   * * Example: Amsterdam = AMS
   * * minLength: 3 characters
   * * maxLength: 3 characters
   * * Must not start with a space or be all spaces.
   * * Must not be all zeros.
   * * **additionalData key:** `airline.leg[N].depart_airport`
   */
  departureAirportCode?: string;
  /**
   * The amount of [departure tax](https://en.wikipedia.org/wiki/Departure_tax) charged, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes).
   * * Encoding: Numeric
   * * minLength: 1
   * * maxLength: 11
   * * Must not be all zeros.
   * * **additionalData key:** `airline.leg[N].depart_tax`
   */
  departureTax?: number;
  /**
   * The [IATA](https://www.iata.org/services/pages/codes.aspx) 3-letter airport code of the
   * destination airport. This field is required if the airline data includes leg details.
   * * Example: Amsterdam = AMS
   * * Encoding: ASCII
   * * minLength: 3 characters
   * * maxLength: 3 characters
   * * Must not start with a space or be all spaces.
   * * Must not be all zeros.
   * * **additionalData key:** `airline.leg[N].destination_code`
   */
  destinationAirportCode?: string;
  /**
   * The [fare basis code](https://en.wikipedia.org/wiki/Fare_basis_code), alphanumeric.
   * * minLength: 1 character
   * * maxLength: 15 characters
   * * Must not start with a space or be all spaces.
   * * Must not be all zeros.
   * * **additionalData key:** `airline.leg[N].fare_base_code`
   */
  fareBasisCode?: string;
  /**
   * The flight identifier.
   * * minLength: 1 character
   * * maxLength: 5 characters
   * * Must not start with a space or be all spaces.
   * * Must not be all zeros.
   * * **additionalData key:** `airline.leg[N].flight_number`
   */
  flightNumber?: string;
  /**
   * A one-letter code that indicates whether the passenger is entitled to make a stopover. Can be a
   * space, O if the passenger is entitled to make a stopover, or X if they are not.
   * * Encoding: ASCII
   * * minLength: 1 character
   * * maxLength: 1 character
   * * **additionalData key:** `airline.leg[N].stop_over_code`
   */
  stopOverCode?: string;
};

export const legSchema: Schema<Leg> = s.object<Leg>({
  carrierCode: s.optional(s.string()),
  classOfTravel: s.optional(s.string()),
  dateOfTravel: s.optional(s.dateTime()),
  departureAirportCode: s.optional(s.string()),
  departureTax: s.optional(s.int()),
  destinationAirportCode: s.optional(s.string()),
  fareBasisCode: s.optional(s.string()),
  flightNumber: s.optional(s.string()),
  stopOverCode: s.optional(s.string()),
});
