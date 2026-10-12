import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdditionalDataLodging = {
  /**
   * A code that corresponds to the category of lodging charges for the payment. Possible values:
   * * 1: Lodging
   * * 2: No show reservation
   * * 3: Advanced deposit
   */
  lodgingSpecialProgramCode?: string;
  /**
   * The arrival date.
   * * Date format: **yyyyMmDd**. For example, for 2023 April 22, **20230422**.
   */
  lodgingCheckInDate?: string;
  /**
   * The departure date.
   * * Date format: **yyyyMmDd**. For example, for 2023 April 22, **20230422**.
   */
  lodgingCheckOutDate?: string;
  /**
   * The toll-free phone number for the lodging.
   * * Format: numeric
   * * Max length: 17 characters.
   * * For US and CA numbers must be 10 characters in length
   * * Must not start with a space
   * * Must not contain any special characters such as + or -
   * * Must not be all zeros.
   */
  lodgingCustomerServiceTollFreeNumber?: string;
  /**
   * Identifies that the facility complies with the Hotel and Motel Fire Safety Act of 1990. Must be
   * 'Y' or 'N'.
   * * Format: alphabetic
   * * Max length: 1 character
   */
  lodgingFireSafetyActIndicator?: string;
  /**
   * The folio cash advances, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes).
   * * Format: numeric
   * * Max length: 12 characters
   */
  lodgingFolioCashAdvances?: string;
  /**
   * The card acceptor’s internal invoice or billing ID reference number.
   * * Max length: 25 characters
   * * Must not start with a space
   * * Must not contain any special characters
   * * Must not be all zeros.
   */
  lodgingFolioNumber?: string;
  /**
   * Any charges for food and beverages associated with the booking, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes).
   * * Format: numeric
   * * Max length: 12 characters
   */
  lodgingFoodBeverageCharges?: string;
  /**
   * Indicates if the customer didn't check in for their booking. Possible values:
   * * **Y**: the customer didn't check in
   * * **N**: the customer checked in
   */
  lodgingNoShowIndicator?: string;
  /**
   * The prepaid expenses for the booking.
   * * Format: numeric
   * * Max length: 12 characters
   */
  lodgingPrepaidExpenses?: string;
  /**
   * The lodging property location's phone number.
   * * Format: numeric
   * * Min length: 10 characters
   * * Max length: 17 characters
   * * For US and CA numbers must be 10 characters in length
   * * Must not start with a space
   * * Must not contain any special characters such as + or -
   * * Must not be all zeros.
   */
  lodgingPropertyPhoneNumber?: string;
  /**
   * The total number of nights the room is booked for.
   * * Format: numeric
   * * Must be a number between 0 and 99
   * * Max length: 4 characters
   */
  lodgingRoom1NumberOfNights?: string;
  /**
   * The rate for the room, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes).
   * * Format: numeric
   * * Max length: 12 characters
   * * Must not be a negative number
   */
  lodgingRoom1Rate?: string;
  /**
   * The total room tax amount, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes).
   * * Format: numeric
   * * Max length: 12 characters
   * * Must not be a negative number
   */
  lodgingTotalRoomTax?: string;
  /**
   * The total tax amount, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes).
   * * Format: numeric
   * * Max length: 12 characters
   * * Must not be a negative number
   */
  lodgingTotalTax?: string;
  /**
   * The number of nights. This should be included in the auth message.
   * * Format: numeric
   * * Max length: 4 characters
   */
  travelEntertainmentAuthDataDuration?: string;
  /**
   * Indicates what market-specific dataset will be submitted. Must be 'H' for Hotel. This should be
   * included in the auth message.
   *
   * * Format: alphanumeric
   * * Max length: 1 character
   */
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
