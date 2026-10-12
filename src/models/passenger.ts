import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Passenger = {
  /**
   * The passenger's date of birth.
   * * Format `yyyy-MM-dd`
   * * minLength: 10
   * * maxLength: 10
   * * **additionalData key:** `airline.passenger[N].date_of_birth`
   */
  dateOfBirth?: string;
  /**
   * The passenger's first name. > This field is required if the airline data includes passenger
   * details or leg details.
   * * Encoding: ASCII
   * * **additionalData key:** `airline.passenger[N].first_name`
   */
  firstName?: string;
  /**
   * The passenger's last name. > This field is required if the airline data includes passenger
   * details or leg details.
   * * Encoding: ASCII
   * * **additionalData key:** `airline.passenger[N].last_name`
   */
  lastName?: string;
  /**
   * The passenger's phone number, including country code. This is an alphanumeric field that can
   * include the '+' and '-' signs.
   * * Encoding: ASCII
   * * minLength: 3 characters
   * * maxLength: 30 characters
   * * **additionalData key:** `airline.passenger[N].phone_number`
   */
  phoneNumber?: string;
  /**
   * The IATA passenger type code (PTC).
   * * Encoding: ASCII
   * * minLength: 3 characters
   * * maxLength: 6 characters
   * * **additionalData key:** `airline.passenger[N].traveller_type`
   */
  travellerType?: string;
};

export const passengerSchema: Schema<Passenger> = s.object<Passenger>({
  dateOfBirth: s.optional(s.dateOnly()),
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  phoneNumber: s.optional(s.string()),
  travellerType: s.optional(s.string()),
});
