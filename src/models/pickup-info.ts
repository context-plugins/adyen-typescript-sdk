import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PickupInfo = {
  /**
   * The city where the car is rented.
   * * Format: ASCII
   * * Must not start with a space or be all spaces.
   * * Must not be all zeros.
   * * **additionalData key:** `carRental.locationCity`
   */
  city?: string;
  /**
   * The country where the car is rented, in [ISO 3166-1
   * alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.
   * * maxLength: 2 characters
   * * **additionalData key:** `carRental.locationCountry`
   */
  countryCode?: string;
  /**
   * The pick-up date.
   * * minLength: 10 characters
   * * maxLength: 10 characters
   * * Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): yyyy-MM-dd
   * * **additionalData key:** `carRental.checkOutDate`
   */
  date?: string;
  /**
   * The state or province where the car is rented.
   * * maxLength: 3 characters
   * * Must not start with a space or be all spaces.
   * * Must not be all zeros.
   * * **additionalData key:** `carRental.locationStateProvince`
   */
  stateOrProvince?: string;
};

export const pickupInfoSchema: Schema<PickupInfo> = s.object<PickupInfo>({
  city: s.optional(s.string()),
  countryCode: s.optional(s.string()),
  date: s.optional(s.dateOnly()),
  stateOrProvince: s.optional(s.string()),
});
