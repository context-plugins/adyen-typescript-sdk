import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdditionalDataLodging = {
  lodgingSpecialProgramCode?: string;
  lodgingCheckInDate?: string;
  lodgingCheckOutDate?: string;
  lodgingCustomerServiceTollFreeNumber?: string;
  lodgingFireSafetyActIndicator?: string;
  lodgingFolioCashAdvances?: string;
  lodgingFolioNumber?: string;
  lodgingFoodBeverageCharges?: string;
  lodgingNoShowIndicator?: string;
  lodgingPrepaidExpenses?: string;
  lodgingPropertyPhoneNumber?: string;
  lodgingRoom1NumberOfNights?: string;
  lodgingRoom1Rate?: string;
  lodgingTotalRoomTax?: string;
  lodgingTotalTax?: string;
  travelEntertainmentAuthDataDuration?: string;
  travelEntertainmentAuthDataMarket?: string;
};

export const additionalDataLodgingSchema: Schema<AdditionalDataLodging> = s.object<AdditionalDataLodging>({
  lodgingSpecialProgramCode: s.optional(s.string()),
  lodgingCheckInDate: s.optional(s.string()),
  lodgingCheckOutDate: s.optional(s.string()),
  lodgingCustomerServiceTollFreeNumber: s.optional(s.string()),
  lodgingFireSafetyActIndicator: s.optional(s.string()),
  lodgingFolioCashAdvances: s.optional(s.string()),
  lodgingFolioNumber: s.optional(s.string()),
  lodgingFoodBeverageCharges: s.optional(s.string()),
  lodgingNoShowIndicator: s.optional(s.string()),
  lodgingPrepaidExpenses: s.optional(s.string()),
  lodgingPropertyPhoneNumber: s.optional(s.string()),
  lodgingRoom1NumberOfNights: s.optional(s.string()),
  lodgingRoom1Rate: s.optional(s.string()),
  lodgingTotalRoomTax: s.optional(s.string()),
  lodgingTotalTax: s.optional(s.string()),
  travelEntertainmentAuthDataDuration: s.optional(s.string()),
  travelEntertainmentAuthDataMarket: s.optional(s.string()),
  _keysMap: {
    lodgingSpecialProgramCode: "lodging.SpecialProgramCode",
    lodgingCheckInDate: "lodging.checkInDate",
    lodgingCheckOutDate: "lodging.checkOutDate",
    lodgingCustomerServiceTollFreeNumber: "lodging.customerServiceTollFreeNumber",
    lodgingFireSafetyActIndicator: "lodging.fireSafetyActIndicator",
    lodgingFolioCashAdvances: "lodging.folioCashAdvances",
    lodgingFolioNumber: "lodging.folioNumber",
    lodgingFoodBeverageCharges: "lodging.foodBeverageCharges",
    lodgingNoShowIndicator: "lodging.noShowIndicator",
    lodgingPrepaidExpenses: "lodging.prepaidExpenses",
    lodgingPropertyPhoneNumber: "lodging.propertyPhoneNumber",
    lodgingRoom1NumberOfNights: "lodging.room1.numberOfNights",
    lodgingRoom1Rate: "lodging.room1.rate",
    lodgingTotalRoomTax: "lodging.totalRoomTax",
    lodgingTotalTax: "lodging.totalTax",
    travelEntertainmentAuthDataDuration: "travelEntertainmentAuthData.duration",
    travelEntertainmentAuthDataMarket: "travelEntertainmentAuthData.market",
  },
});
