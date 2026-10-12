import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pickupInfoSchema, type PickupInfo } from "./pickup-info.js";
import { rateTypeSchema, type RateType } from "./rate-type.js";
import { rentalSurchargesSchema, type RentalSurcharges } from "./rental-surcharges.js";
import { returnInfoSchema, type ReturnInfo } from "./return-info.js";

/**
 * [Car rental enhanced scheme
 * data](https://docs.adyen.com/payment-methods/cards/enhanced-scheme-data/car-rental/) that may be
 * required for processing the transaction and/or for interchange savings.
 */
export type CarRental1 = {
  /**
   * The customer service phone number of the car rental company.
   * * Format: Alphanumeric
   * * maxLength: 17
   * * For US and CA numbers must be 10 characters in length
   * * Must not contain any special characters such as + or -
   * * Must not start with a space or be all spaces.
   * * Must not be all zeros.
   * * **additionalData key:** `carRental.customerServiceTollFreeNumber`
   */
  customerServicePhoneNumber?: string;
  /**
   * Indicates if the customer didn't pick up their rental car.
   * * **additionalData key:** `carRental.noShowIndicator`
   */
  noShow?: boolean;
  pickupInfo?: PickupInfo;
  /**
   * Indicates whether the rental rate is daily or weekly.
   * * **additionalData key:** `carRental.rateIndicator`
   */
  rateType?: RateType;
  /**
   * The rental agreement number for the car rental.
   * * Format: ASCII
   * * maxLength: 9 characters
   * * Must not start with a space or be all spaces.
   * * Must not be all zeros.
   * * **additionalData key:** `carRental.rentalAgreementNumber`
   */
  rentalAgreementNumber?: string;
  /**
   * The classification of the rental car.
   * * Format: Alphanumeric
   * * maxLength: 4 characters
   * * Must not start with a space or be all spaces.
   * * Must not be all zeros.
   * * **additionalData key:** `carRental.rentalClassId`
   */
  rentalClassId?: string;
  /**
   * The number of days the car is rented for.
   * * Format: Numeric
   * * Max value: 9999
   * * **additionalData key:** `carRental.daysRented`
   */
  rentalDays?: number;
  /**
   * Rental rate, in [minor units](https://docs.adyen.com/development-resources/currency-codes).
   * * For example, 2000 means USD 20.00.
   * * Encoding: Numeric
   * * Max value: 10000000000
   * * Frequency of the rental rate is specified in the rateType field.
   * * **additionalData key:** `carRental.rate`
   */
  rentalRate?: number;
  rentalSurcharges?: RentalSurcharges;
  /**
   * The name of the person renting the car.
   * * Format: ASCII
   * * Must not start with a space or be all spaces.
   * * Must not be all zeros.
   * * **additionalData key:** `carRental.renterName`
   */
  renterName: string;
  returnInfo?: ReturnInfo;
  /**
   * Indicates if the goods or services were tax-exempt, or if tax was not collected.
   * * **additionalData key:** `carRental.taxExemptIndicator`
   */
  taxExempt?: boolean;
};

export const carRental1Schema: Schema<CarRental1> = s.object<CarRental1>({
  customerServicePhoneNumber: s.optional(s.string()),
  noShow: s.optional(s.boolean()),
  pickupInfo: s.optional(s.lazy(() => pickupInfoSchema)),
  rateType: s.optional(s.lazy(() => rateTypeSchema)),
  rentalAgreementNumber: s.optional(s.string()),
  rentalClassId: s.optional(s.string()),
  rentalDays: s.optional(s.int()),
  rentalRate: s.optional(s.int()),
  rentalSurcharges: s.optional(s.lazy(() => rentalSurchargesSchema)),
  renterName: s.string(),
  returnInfo: s.optional(s.lazy(() => returnInfoSchema)),
  taxExempt: s.optional(s.boolean()),
});
