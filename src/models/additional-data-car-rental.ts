import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdditionalDataCarRental = {
  carRentalCheckOutDate?: string;
  carRentalCustomerServiceTollFreeNumber?: string;
  carRentalDaysRented?: string;
  carRentalFuelCharges?: string;
  carRentalInsuranceCharges?: string;
  carRentalLocationCity?: string;
  carRentalLocationCountry?: string;
  carRentalLocationStateProvince?: string;
  carRentalNoShowIndicator?: string;
  carRentalOneWayDropOffCharges?: string;
  carRentalRate?: string;
  carRentalRateIndicator?: string;
  carRentalRentalAgreementNumber?: string;
  carRentalRentalClassId?: string;
  carRentalRenterName?: string;
  carRentalReturnCity?: string;
  carRentalReturnCountry?: string;
  carRentalReturnDate?: string;
  carRentalReturnLocationId?: string;
  carRentalReturnStateProvince?: string;
  carRentalTaxExemptIndicator?: string;
  travelEntertainmentAuthDataDuration?: string;
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
