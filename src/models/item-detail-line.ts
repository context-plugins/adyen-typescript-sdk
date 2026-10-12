import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ItemDetailLine = {
  /**
   * The code that identifies the item in a standardized commodity coding scheme. There are
   * different commodity coding schemes:
   * * [UNSPSC commodity codes](https://www.ungm.org/public/unspsc)
   * * [HS commodity codes](https://www.wcoomd.org/en/topics/nomenclature/overview.aspx)
   * * [NAICS commodity codes](https://www.census.gov/naics/)
   * * [NAPCS commodity codes](https://www.census.gov/naics/napcs/)
   *
   *
   * * Encoding: ASCII
   * * Max length: 12 characters
   * * Must not start with a space or be all spaces.
   * * Must not be all zeros.
   * * **additionalData key:** `enhancedSchemeData.itemDetailLine[N].commodityCode`
   */
  commodityCode?: string;
  /**
   * A description of the item, that provides details about the purchase.
   *
   * For Visa transactions with level 3 ESD, the description must not be the same or very similar to
   * your merchant name, or, consist only of common words like "product", or "service".
   * * Encoding: ASCII
   * * Max length: 26 characters
   * * Must not be a single character.
   * * Must not be blank.
   * * Must not be all special characters.
   * * Must not start with a space or be all spaces.
   * * Must not be all zeros.
   * * **additionalData key:** `enhancedSchemeData.itemDetailLine[N].description`
   */
  description?: string;
  /**
   * The discount amount, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes).
   * * For example, 2000 means USD 20.00.
   * * Encoding: Numeric
   * * Max value: 10000000000
   * * **additionalData key:** `enhancedSchemeData.itemDetailLine[N].discountAmount`
   */
  discountAmount?: number;
  /**
   * The product code. Must be a unique product code associated with the item or service. This can
   * be your unique code for the item, or the manufacturer's product code.
   * * Encoding: ASCII.
   * * Max length: 12 characters
   * * **additionalData key:** `enhancedSchemeData.itemDetailLine[N].productCode`
   */
  productCode?: string;
  /**
   * The number of items. Must be an integer greater than zero.
   * * Encoding: Numeric
   * * Max value: 9999
   * * **additionalData key:** `enhancedSchemeData.itemDetailLine[N].quantity`
   */
  quantity?: number;
  /**
   * The total amount for the line item, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes).
   * * For example, 2000 means USD 20.00.
   * * Encoding: Numeric
   * * Max value: 10000000000
   *
   * See [Amount requirements for level 2/3
   * ESD](https://docs.adyen.com//payment-methods/cards/enhanced-scheme-data/l2-l3#amount-requirements)
   * to learn more about how to calculate the line item total.
   * * **additionalData key:** `enhancedSchemeData.itemDetailLine[N].totalAmount`
   */
  totalAmount?: number;
  /**
   * The unit of measurement for an item.
   * * Encoding: ASCII
   * * Max length: 3 characters
   * * **additionalData key:** `enhancedSchemeData.itemDetailLine[N].unitOfMeasure`
   */
  unitOfMeasure?: string;
  /**
   * The unit price, in [minor units](https://docs.adyen.com/development-resources/currency-codes).
   * * For example, 2000 means USD 20.00.
   * * Encoding: Numeric
   * * Max value: 10000000000
   * * **additionalData key:** `enhancedSchemeData.itemDetailLine[N].unitPrice`
   */
  unitPrice?: number;
};

export const itemDetailLineSchema: Schema<ItemDetailLine> = s.object<ItemDetailLine>({
  commodityCode: s.optional(s.string()),
  description: s.optional(s.string()),
  discountAmount: s.optional(s.int()),
  productCode: s.optional(s.string()),
  quantity: s.optional(s.int()),
  totalAmount: s.optional(s.int()),
  unitOfMeasure: s.optional(s.string()),
  unitPrice: s.optional(s.int()),
});
