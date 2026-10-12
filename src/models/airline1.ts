import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { agencySchema, type Agency } from "./agency.js";
import { legSchema, type Leg } from "./leg.js";
import { passengerSchema, type Passenger } from "./passenger.js";
import { ticketSchema, type Ticket } from "./ticket.js";
import { travelAgencySchema, type TravelAgency } from "./travel-agency.js";

/**
 * [Airline enhanced scheme
 * data](https://docs.adyen.com/payment-methods/cards/enhanced-scheme-data/airline/) that may be
 * required for processing the transaction and/or for interchange savings.
 */
export type Airline1 = {
  agency?: Agency;
  /**
   * The amount charged for boarding the plane, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes).
   * * Encoding: Numeric
   * * minLength: 1 character
   * * maxLength: 11 characters
   * * **additionalData key:** `airline.boarding_fee`
   */
  boardingFee?: number;
  /**
   * The [IATA](https://www.iata.org/services/pages/codes.aspx) 3-digit accounting code (PAX) that
   * identifies the carrier.
   * * Format: IATA 3-digit accounting code (PAX)
   * * Example: KLM = 074
   * * minLength: 3 characters
   * * maxLength: 3 characters
   * * Must not start with a space or be all spaces.
   * * Must not be all zeros.
   * * **additionalData key:** `airline.airline_code`
   */
  code?: string;
  /**
   * The [CRS](https://en.wikipedia.org/wiki/Computer_reservation_system) used to make the
   * reservation and purchase the ticket.
   * * Encoding: ASCII
   * * minLength: 4 characters
   * * maxLength: 4 characters
   * * **additionalData key:** `airline.computerized_reservation_system`
   */
  computerizedReservationSystem?: string;
  /**
   * The alphanumeric customer reference number.
   * * Encoding: ASCII
   * * maxLength: 20 characters
   * * If you send more than 20 characters, the customer reference number is truncated
   * * Must not start with a space or be all spaces.
   * * **additionalData key:** `airline.customer_reference_number`
   */
  customerReferenceNumber?: string;
  /**
   * The [IATA](https://www.iata.org/services/pages/codes.aspx) 2-letter accounting code (PAX) that
   * identifies the carrier.
   * * Encoding: ASCII
   * * Example: KLM = KL
   * * minLength: 2 characters
   * * maxLength: 2 characters
   * * Must not start with a space or be all spaces.
   * * **additionalData key:** `airline.airline_designator_code`
   */
  designatorCode?: string;
  /**
   * A code that identifies the type of item bought. The description of the code can appear on
   * credit card statements.
   * * Encoding: ASCII
   * * Example: Passenger ticket = 01
   * * minLength: 2 characters
   * * maxLength: 2 characters
   * * **additionalData key:** `airline.document_type`
   */
  documentType?: string;
  /**
   * The flight departure date. Time is optional.
   * * Format for date only: `yyyy-MM-dd`
   * * Format for date and time: `yyyy-MM-ddTHH:mm`
   * * Use local time of departure airport.
   * * minLength: 10 characters
   * * maxLength: 16 characters
   * * **additionalData key:** `airline.flight_date`
   */
  flightDate?: Date;
  legs?: Leg[];
  /**
   * The passenger's name, initials, and title.
   * * Format: last name + first name or initials + title
   * * Example: *FLYER / MARY MS*
   * * minLength: 1 character
   * * maxLength: 20 characters
   * * If you send more than 20 characters, the name is truncated
   * * Must not start with a space or be all spaces.
   * * Must not be all zeros.
   * * **additionalData key:** `airline.passenger_name`
   */
  passengerName: string;
  passengers?: Passenger[];
  ticket?: Ticket;
  travelAgency?: TravelAgency;
};

export const airline1Schema: Schema<Airline1> = s.object<Airline1>({
  agency: s.optional(s.lazy(() => agencySchema)),
  boardingFee: s.optional(s.int()),
  code: s.optional(s.string()),
  computerizedReservationSystem: s.optional(s.string()),
  customerReferenceNumber: s.optional(s.string()),
  designatorCode: s.optional(s.string()),
  documentType: s.optional(s.string()),
  flightDate: s.optional(s.dateTime()),
  legs: s.optional(s.array(s.lazy(() => legSchema))),
  passengerName: s.string(),
  passengers: s.optional(s.array(s.lazy(() => passengerSchema))),
  ticket: s.optional(s.lazy(() => ticketSchema)),
  travelAgency: s.optional(s.lazy(() => travelAgencySchema)),
});
