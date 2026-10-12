import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdditionalDataCarRental = {
  /**
   * The pick-up date.
   * * Date format: `yyyyMMdd`
   */
  carRentalCheckOutDate?: string;
  /**
   * The customer service phone number of the car rental company.
   * * Format: Alphanumeric
   * * maxLength: 17
   * * For US and CA numbers must be 10 characters in length
   * * Must not start with a space
   * * Must not contain any special characters such as + or - *Must not be all zeros.
   */
  carRentalCustomerServiceTollFreeNumber?: string;
  /**
   * Number of days for which the car is being rented.
   * * Format: Numeric
   * * maxLength: 4
   * * Must not be all spaces
   */
  carRentalDaysRented?: string;
  /**
   * Any fuel charges associated with the rental, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes).
   * * Format: Numeric
   * * maxLength: 12
   */
  carRentalFuelCharges?: string;
  /**
   * Any insurance charges associated with the rental, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes).
   * * Format: Numeric
   * * maxLength: 12
   * * Must not be all spaces *Must not be all zeros.
   */
  carRentalInsuranceCharges?: string;
  /**
   * The city where the car is rented.
   * * Format: Alphanumeric
   * * maxLength: 18
   * * Must not start with a space or be all spaces *Must not be all zeros.
   */
  carRentalLocationCity?: string;
  /**
   * The country where the car is rented, in [ISO 3166-1
   * alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.
   * * Format: Alphanumeric
   * * maxLength: 2
   */
  carRentalLocationCountry?: string;
  /**
   * The state or province where the car is rented.
   * * Format: Alphanumeric
   * * maxLength: 2
   * * Must not start with a space or be all spaces *Must not be all zeros.
   */
  carRentalLocationStateProvince?: string;
  /**
   * Indicates if the customer didn't pick up their rental car.
   * * Y - Customer did not pick up their car
   * * N - Not applicable
   */
  carRentalNoShowIndicator?: string;
  /**
   * The charge for not returning a car to the original rental location, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes).
   * * maxLength: 12
   */
  carRentalOneWayDropOffCharges?: string;
  /**
   * The daily rental rate, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes).
   * * Format: Alphanumeric
   * * maxLength: 12
   */
  carRentalRate?: string;
  /**
   * Specifies whether the given rate is applied daily or weekly.
   * * D - Daily rate
   * * W - Weekly rate
   */
  carRentalRateIndicator?: string;
  /**
   * The rental agreement number for the car rental.
   * * Format: Alphanumeric
   * * maxLength: 9
   * * Must not start with a space or be all spaces *Must not be all zeros.
   */
  carRentalRentalAgreementNumber?: string;
  /**
   * The classification of the rental car.
   * * Format: Alphanumeric
   * * maxLength: 4
   * * Must not start with a space or be all spaces *Must not be all zeros.
   */
  carRentalRentalClassId?: string;
  /**
   * The name of the person renting the car.
   * * Format: Alphanumeric
   * * maxLength: 26
   * * If you send more than 26 characters, the name is truncated
   * * Must not start with a space or be all spaces *Must not be all zeros.
   */
  carRentalRenterName?: string;
  /**
   * The city where the car must be returned.
   * * Format: Alphanumeric
   * * maxLength: 18
   * * Must not start with a space or be all spaces *Must not be all zeros.
   */
  carRentalReturnCity?: string;
  /**
   * The country where the car must be returned, in [ISO 3166-1
   * alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.
   * * Format: Alphanumeric
   * * maxLength: 2
   */
  carRentalReturnCountry?: string;
  /**
   * The last date to return the car by.
   * * Date format: `yyyyMMdd`
   * * maxLength: 8
   */
  carRentalReturnDate?: string;
  /**
   * The agency code, phone number, or address abbreviation
   * * Format: Alphanumeric
   * * maxLength: 10
   * * Must not start with a space or be all spaces *Must not be all zeros.
   */
  carRentalReturnLocationId?: string;
  /**
   * The state or province where the car must be returned.
   * * Format: Alphanumeric
   * * maxLength: 3
   * * Must not start with a space or be all spaces *Must not be all zeros.
   */
  carRentalReturnStateProvince?: string;
  /**
   * Indicates if the goods or services were tax-exempt, or if tax was not paid on them.
   *
   * Values:
   * * Y - Goods or services were tax exempt
   * * N - Tax was not collected
   */
  carRentalTaxExemptIndicator?: string;
  /**
   * Number of days the car is rented for. This should be included in the auth message.
   * * Format: Numeric
   * * maxLength: 4
   */
  travelEntertainmentAuthDataDuration?: string;
  /**
   * Indicates what market-specific dataset will be submitted or is being submitted. Value should be
   * 'A' for car rental. This should be included in the auth message.
   * * Format: Alphanumeric
   * * maxLength: 1
   */
  travelEntertainmentAuthDataMarket?: string;
};

export const additionalDataCarRentalSchema: Schema<AdditionalDataCarRental> =
  s.object<AdditionalDataCarRental>({
    carRentalCheckOutDate: s.optional(s.string()),
    carRentalCustomerServiceTollFreeNumber: s.optional(s.string()),
    carRentalDaysRented: s.optional(s.string()),
    carRentalFuelCharges: s.optional(s.string()),
    carRentalInsuranceCharges: s.optional(s.string()),
    carRentalLocationCity: s.optional(s.string()),
    carRentalLocationCountry: s.optional(s.string()),
    carRentalLocationStateProvince: s.optional(s.string()),
    carRentalNoShowIndicator: s.optional(s.string()),
    carRentalOneWayDropOffCharges: s.optional(s.string()),
    carRentalRate: s.optional(s.string()),
    carRentalRateIndicator: s.optional(s.string()),
    carRentalRentalAgreementNumber: s.optional(s.string()),
    carRentalRentalClassId: s.optional(s.string()),
    carRentalRenterName: s.optional(s.string()),
    carRentalReturnCity: s.optional(s.string()),
    carRentalReturnCountry: s.optional(s.string()),
    carRentalReturnDate: s.optional(s.string()),
    carRentalReturnLocationId: s.optional(s.string()),
    carRentalReturnStateProvince: s.optional(s.string()),
    carRentalTaxExemptIndicator: s.optional(s.string()),
    travelEntertainmentAuthDataDuration: s.optional(s.string()),
    travelEntertainmentAuthDataMarket: s.optional(s.string()),
    _keysMap: {
      carRentalCheckOutDate: "carRental.checkOutDate",
      carRentalCustomerServiceTollFreeNumber: "carRental.customerServiceTollFreeNumber",
      carRentalDaysRented: "carRental.daysRented",
      carRentalFuelCharges: "carRental.fuelCharges",
      carRentalInsuranceCharges: "carRental.insuranceCharges",
      carRentalLocationCity: "carRental.locationCity",
      carRentalLocationCountry: "carRental.locationCountry",
      carRentalLocationStateProvince: "carRental.locationStateProvince",
      carRentalNoShowIndicator: "carRental.noShowIndicator",
      carRentalOneWayDropOffCharges: "carRental.oneWayDropOffCharges",
      carRentalRate: "carRental.rate",
      carRentalRateIndicator: "carRental.rateIndicator",
      carRentalRentalAgreementNumber: "carRental.rentalAgreementNumber",
      carRentalRentalClassId: "carRental.rentalClassId",
      carRentalRenterName: "carRental.renterName",
      carRentalReturnCity: "carRental.returnCity",
      carRentalReturnCountry: "carRental.returnCountry",
      carRentalReturnDate: "carRental.returnDate",
      carRentalReturnLocationId: "carRental.returnLocationId",
      carRentalReturnStateProvince: "carRental.returnStateProvince",
      carRentalTaxExemptIndicator: "carRental.taxExemptIndicator",
      travelEntertainmentAuthDataDuration: "travelEntertainmentAuthData.duration",
      travelEntertainmentAuthDataMarket: "travelEntertainmentAuthData.market",
    },
  });
