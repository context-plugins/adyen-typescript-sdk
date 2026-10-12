import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RentalSurcharges = {
  /**
   * The fuel charges associated with the rental, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes).
   * * For example, 2000 means USD 20.00.
   * * Encoding: Numeric
   * * Max value: 10000000000
   * * **additionalData key:** `carRental.fuelCharges`
   */
  fuel?: number;
  /**
   * Any insurance charges associated with the rental, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes).
   * * For example, 2000 means USD 20.00.
   * * Encoding: Numeric
   * * Max value: 10000000000
   * * **additionalData key:** `carRental.insuranceCharges`
   */
  insurance?: number;
  /**
   * The charge for not returning a car to the original rental location, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes).
   * * For example, 2000 means USD 20.00.
   * * Encoding: Numeric
   * * Max value: 10000000000
   * * **additionalData key:** `carRental.oneWayDropOffCharges`
   */
  oneWayDropOff?: number;
};

export const rentalSurchargesSchema: Schema<RentalSurcharges> = s.object<RentalSurcharges>({
  fuel: s.optional(s.int()),
  insurance: s.optional(s.int()),
  oneWayDropOff: s.optional(s.int()),
});
