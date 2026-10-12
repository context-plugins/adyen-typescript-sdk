import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { folio2Schema, type Folio2 } from "./folio2.js";
import { lodgingChargeTypeSchema, type LodgingChargeType } from "./lodging-charge-type.js";
import { roomSchema, type Room } from "./room.js";

/**
 * [Lodging enhanced scheme
 * data](https://docs.adyen.com/payment-methods/cards/enhanced-scheme-data/lodging/) that may be
 * required for processing the transaction and/or for interchange savings.
 */
export type Lodging2 = {
  /**
   * The check-in date.
   * * Min Length: 10 characters
   * * Max Length: 10 characters
   * * Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): yyyy-MM-dd
   * * **additionalData key:** `lodging.checkInDate`
   */
  checkInDate?: string;
  /**
   * The check-out date.
   * * Min Length: 10 characters
   * * Max Length: 10 characters
   * * Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): yyyy-MM-dd
   * * **additionalData key:** `lodging.checkOutDate`
   */
  checkOutDate?: string;
  /**
   * The toll-free phone number for the lodging customer service.
   * * Format: Alphanumeric
   * * For US and CA numbers must be 10 characters in length
   * * Must not start with a space
   * * Must not contain any special characters such as + or -
   * * Must not be all zeros.
   * * **additionalData key:** `lodging.customerServiceTollFreeNumber`
   */
  customerServicePhoneNumber?: string;
  /**
   * Indicates that the facility complies with the Hotel and Motel Fire Safety Act of 1990.
   * * **additionalData key:** `lodging.fireSafetyActIndicator`
   */
  fireSafetyCompliance?: boolean;
  /** The folio information for the booking. */
  folio?: Folio2;
  /**
   * Any charges for food and beverages associated with the booking, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes).
   * * For example, 2000 means USD 20.00.
   * * Encoding: Numeric
   * * Max value: 10000000000
   * * **additionalData key:** `lodging.foodBeverageCharges`
   */
  foodBeverageCharges?: number;
  /**
   * The category of lodging charges for the payment.
   * * **additionalData key:** `lodging.specialProgramCode`
   */
  lodgingChargeType?: LodgingChargeType;
  /**
   * Indicates if the customer didn't check in for their booking.
   * * **additionalData key:** `lodging.noShowIndicator`
   */
  noShow?: boolean;
  /**
   * The prepaid expenses for the booking, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes).
   * * For example, 2000 means USD 20.00.
   * * Encoding: Numeric
   * * Max value: 10000000000
   * * **additionalData key:** `lodging.prepaidExpenses`
   */
  prepaidExpenses?: number;
  /**
   * The lodging property location's phone number.
   * * Format: Alphanumeric
   * * Min length: 10 characters
   * * For US and CA numbers must be 10 characters in length
   * * Must not start with a space
   * * Must not contain any special characters such as + or -
   * * Must not be all zeros.
   * * **additionalData key:** `lodging.propertyPhoneNumber`
   */
  propertyPhoneNumber?: string;
  /**
   * The name of the person renting the room.
   * * Format: ASCII
   * * Must not start with a space or be all spaces.
   * * Must not be all zeros.
   * * **additionalData key:** `lodging.renterName`
   */
  renterName?: string;
  /** The list of rooms booked. */
  rooms?: Room[];
  /**
   * The total room tax amount, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes).
   * * For example, 2000 means USD 20.00.
   * * Encoding: Numeric
   * * Max value: 10000000000
   * * **additionalData key:** `lodging.totalRoomTax`
   */
  totalRoomTax?: number;
  /**
   * The total tax amount, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes).
   * * For example, 2000 means USD 20.00.
   * * Encoding: Numeric
   * * Max value: 10000000000
   * * **additionalData key:** `lodging.totalTax`
   */
  totalTax?: number;
};

export const lodging2Schema: Schema<Lodging2> = s.object<Lodging2>({
  checkInDate: s.optional(s.dateOnly()),
  checkOutDate: s.optional(s.dateOnly()),
  customerServicePhoneNumber: s.optional(s.string()),
  fireSafetyCompliance: s.optional(s.boolean()),
  folio: s.optional(s.lazy(() => folio2Schema)),
  foodBeverageCharges: s.optional(s.int()),
  lodgingChargeType: s.optional(s.lazy(() => lodgingChargeTypeSchema)),
  noShow: s.optional(s.boolean()),
  prepaidExpenses: s.optional(s.int()),
  propertyPhoneNumber: s.optional(s.string()),
  renterName: s.optional(s.string()),
  rooms: s.optional(s.array(s.lazy(() => roomSchema))),
  totalRoomTax: s.optional(s.int()),
  totalTax: s.optional(s.int()),
});
