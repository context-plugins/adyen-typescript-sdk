import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Room = {
  /**
   * The total number of nights the room is booked for.
   * * Format: Numeric
   * * Must be a number between 1 and 99
   * * **additionalData key:** `lodging.room[N].numberOfNights`
   */
  numberOfNights?: number;
  /**
   * Room rate per night, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes).
   * * For example, 2000 means USD 20.00.
   * * Encoding: Numeric
   * * Max value: 10000000000
   * * **additionalData key:** `lodging.room[N].rate`
   */
  rate?: number;
};

export const roomSchema: Schema<Room> = s.object<Room>({
  numberOfNights: s.optional(s.int()),
  rate: s.optional(s.int()),
});
