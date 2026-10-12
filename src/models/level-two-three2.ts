import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { destination1Schema, type Destination1 } from "./destination1.js";
import { itemDetailLineSchema, type ItemDetailLine } from "./item-detail-line.js";

/**
 * [Level 2 and Level 3 enhanced scheme
 * data](https://docs.adyen.com/payment-methods/cards/enhanced-scheme-data/l2-l3/) that may be
 * required for processing the transaction and/or for interchange savings.
 */
export type LevelTwoThree2 = {
  /**
   * The reference number to identify the customer and their order.
   * * Format: ASCII
   * * Max length: 25 characters
   * * Must not start with a space or be all spaces.
   * * Must not be all zeros.
   * * **additionalData key:** `enhancedSchemeData.customerReference`
   */
  customerReferenceNumber?: string;
  /** The destination address information. */
  destination?: Destination1;
  /**
   * The duty tax amount, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes).
   * * For example, 2000 means USD 20.00.
   * * Encoding: Numeric
   * * Max value: 10000000000
   * * **additionalData key:** `enhancedSchemeData.dutyAmount`
   */
  dutyAmount?: number;
  /**
   * The shipping amount, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes).
   * * For example, 2000 means USD 20.00.
   * * Encoding: Numeric
   * * Max value: 10000000000
   * * **additionalData key:** `enhancedSchemeData.freightAmount`
   */
  freightAmount?: number;
  /** The list of item detail lines. */
  itemDetailLines?: ItemDetailLine[];
  /**
   * The date of the order.
   * * Min Length: 10 characters
   * * Max Length: 10 characters
   * * Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): yyyy-MM-dd
   * * **additionalData key:** `enhancedSchemeData.orderDate`
   */
  orderDate?: string;
  /**
   * The postal code of the address where the item is shipped from.
   * * Encoding: ASCII
   * * Max length: 10 characters
   * * For the US, it must be in five or nine digits format. For example, 10001 or 10001-0000.
   * * For Canada, it must be in 6 digits format. For example, M4B 1G5.
   * * **additionalData key:** `enhancedSchemeData.shipFromPostalCode`
   */
  shipFromPostalCode?: string;
  /**
   * The amount of state or provincial [tax included in the total transaction
   * amount](https://docs.adyen.com/payment-methods/cards/enhanced-scheme-data/l2-l3#requirements-to-send-level-2-3-esd),
   * in [minor units](https://docs.adyen.com/development-resources/currency-codes).
   * * For example, 2000 means USD 20.00.
   * * Encoding: Numeric
   * * Max value: 10000000000
   * * For L2 data: must not be all zeroes.
   * * For L3 data: can be zero.
   * * **additionalData key:** `enhancedSchemeData.totalTaxAmount`
   */
  totalTaxAmount?: number;
};

export const levelTwoThree2Schema: Schema<LevelTwoThree2> = s.object<LevelTwoThree2>({
  customerReferenceNumber: s.optional(s.string()),
  destination: s.optional(s.lazy(() => destination1Schema)),
  dutyAmount: s.optional(s.int()),
  freightAmount: s.optional(s.int()),
  itemDetailLines: s.optional(s.array(s.lazy(() => itemDetailLineSchema))),
  orderDate: s.optional(s.dateOnly()),
  shipFromPostalCode: s.optional(s.string()),
  totalTaxAmount: s.optional(s.int()),
});
