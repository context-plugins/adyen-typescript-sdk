import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdditionalDataLevel23 = {
  /**
   * The reference number to identify the customer and their order.
   * * Encoding: ASCII
   * * Max length: 25 characters
   * * Must not start with a space or be all spaces.
   * * Must not be all zeros.
   */
  enhancedSchemeDataCustomerReference?: string;
  /**
   * The three-letter [ISO 3166-1 alpha-3 country
   * code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) for the destination address.
   * * Encoding: ASCII
   * * Fixed length: 3 characters
   */
  enhancedSchemeDataDestinationCountryCode?: string;
  /**
   * The postal code of the destination address.
   * * Encoding: ASCII
   * * Max length: 10 characters
   * * Must not start with a space.
   * * For the US, it must be in five or nine digits format. For example, 10001 or 10001-0000.
   * * For Canada, it must be in 6 digits format. For example, M4B 1G5.
   */
  enhancedSchemeDataDestinationPostalCode?: string;
  /**
   * The state or province code of the destination address.
   * * Encoding: ASCII
   * * Max length: 3 characters
   * * Must not start with a space.
   */
  enhancedSchemeDataDestinationStateProvinceCode?: string;
  /**
   * The duty tax amount, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes).
   * * For example, 2000 means USD 20.00.
   * * Encoding: Numeric
   * * Max length: 12 characters
   */
  enhancedSchemeDataDutyAmount?: string;
  /**
   * The shipping amount, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes).
   * * For example, 2000 means USD 20.00.
   * * Encoding: Numeric
   * * Max length: 12 characters
   */
  enhancedSchemeDataFreightAmount?: string;
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
   */
  enhancedSchemeDataItemDetailLineItemNrCommodityCode?: string;
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
   * * Must not be blank.
   * * Must not start with a space or be all spaces.
   * * Must not be all zeros.
   */
  enhancedSchemeDataItemDetailLineItemNrDescription?: string;
  /**
   * The discount amount, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes).
   * * For example, 2000 means USD 20.00.
   * * Encoding: Numeric
   * * Max length: 12 characters
   */
  enhancedSchemeDataItemDetailLineItemNrDiscountAmount?: string;
  /**
   * The product code. Must be a unique product code associated with the item or service. This can
   * be your unique code for the item, or the manufacturer's product code.
   * * Encoding: ASCII.
   * * Max length: 12 characters
   * * Must not start with a space or be all spaces.
   * * Must not be all zeros.
   */
  enhancedSchemeDataItemDetailLineItemNrProductCode?: string;
  /**
   * The number of items. Must be an integer greater than zero.
   * * Encoding: Numeric
   * * Max length: 12 characters
   * * Must not start with a space or be all spaces.
   */
  enhancedSchemeDataItemDetailLineItemNrQuantity?: string;
  /**
   * The total amount for the line item, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes). See [Amount requirements
   * for level 2/3
   * ESD](https://docs.adyen.com//payment-methods/cards/enhanced-scheme-data/l2-l3#amount-requirements)
   * to learn more about how to calculate the line item total.
   * * For example, 2000 means USD 20.00.
   * * Max length: 12 characters
   * * Must not start with a space or be all spaces.
   * * Must not be all zeros.
   */
  enhancedSchemeDataItemDetailLineItemNrTotalAmount?: string;
  /**
   * The unit of measurement for an item.
   * * Encoding: ASCII
   * * Max length: 3 characters
   * * Must not start with a space or be all spaces.
   * * Must not be all zeros.
   */
  enhancedSchemeDataItemDetailLineItemNrUnitOfMeasure?: string;
  /**
   * The unit price in [minor units](https://docs.adyen.com/development-resources/currency-codes).
   * * For example, 2000 means USD 20.00.
   * * Encoding: Numeric
   * * Max length: 12 characters
   * * Must not be all zeros.
   */
  enhancedSchemeDataItemDetailLineItemNrUnitPrice?: string;
  /**
   * The order date.
   * * Format: `ddMMyy`
   * * Encoding: ASCII
   * * Max length: 6 characters
   */
  enhancedSchemeDataOrderDate?: string;
  /**
   * The postal code of the address where the item is shipped from.
   * * Encoding: ASCII
   * * Max length: 10 characters
   * * Must not start with a space or be all spaces.
   * * Must not be all zeros.For the US, it must be in five or nine digits format. For example,
   *   10001 or 10001-0000.
   * * For Canada, it must be in 6 digits format. For example, M4B 1G5.
   */
  enhancedSchemeDataShipFromPostalCode?: string;
  /**
   * The amount of state or provincial [tax included in the total transaction
   * amount](https://docs.adyen.com/payment-methods/cards/enhanced-scheme-data/l2-l3#requirements-to-send-level-2-3-esd),
   * in [minor units](https://docs.adyen.com/development-resources/currency-codes).
   * * For example, 2000 means USD 20.00.
   * * Encoding: Numeric
   * * Max length: 12 characters
   * * For L2 data: must not be all zeroes.
   * * For L3 data: can be zero.
   */
  enhancedSchemeDataTotalTaxAmount?: string;
};

export const additionalDataLevel23Schema: Schema<AdditionalDataLevel23> = s.object<AdditionalDataLevel23>({
  enhancedSchemeDataCustomerReference: s.optional(s.string()),
  enhancedSchemeDataDestinationCountryCode: s.optional(s.string()),
  enhancedSchemeDataDestinationPostalCode: s.optional(s.string()),
  enhancedSchemeDataDestinationStateProvinceCode: s.optional(s.string()),
  enhancedSchemeDataDutyAmount: s.optional(s.string()),
  enhancedSchemeDataFreightAmount: s.optional(s.string()),
  enhancedSchemeDataItemDetailLineItemNrCommodityCode: s.optional(s.string()),
  enhancedSchemeDataItemDetailLineItemNrDescription: s.optional(s.string()),
  enhancedSchemeDataItemDetailLineItemNrDiscountAmount: s.optional(s.string()),
  enhancedSchemeDataItemDetailLineItemNrProductCode: s.optional(s.string()),
  enhancedSchemeDataItemDetailLineItemNrQuantity: s.optional(s.string()),
  enhancedSchemeDataItemDetailLineItemNrTotalAmount: s.optional(s.string()),
  enhancedSchemeDataItemDetailLineItemNrUnitOfMeasure: s.optional(s.string()),
  enhancedSchemeDataItemDetailLineItemNrUnitPrice: s.optional(s.string()),
  enhancedSchemeDataOrderDate: s.optional(s.string()),
  enhancedSchemeDataShipFromPostalCode: s.optional(s.string()),
  enhancedSchemeDataTotalTaxAmount: s.optional(s.string()),
  _keysMap: {
    enhancedSchemeDataCustomerReference: "enhancedSchemeData.customerReference",
    enhancedSchemeDataDestinationCountryCode: "enhancedSchemeData.destinationCountryCode",
    enhancedSchemeDataDestinationPostalCode: "enhancedSchemeData.destinationPostalCode",
    enhancedSchemeDataDestinationStateProvinceCode: "enhancedSchemeData.destinationStateProvinceCode",
    enhancedSchemeDataDutyAmount: "enhancedSchemeData.dutyAmount",
    enhancedSchemeDataFreightAmount: "enhancedSchemeData.freightAmount",
    enhancedSchemeDataItemDetailLineItemNrCommodityCode:
      "enhancedSchemeData.itemDetailLine[itemNr].commodityCode",
    enhancedSchemeDataItemDetailLineItemNrDescription:
      "enhancedSchemeData.itemDetailLine[itemNr].description",
    enhancedSchemeDataItemDetailLineItemNrDiscountAmount:
      "enhancedSchemeData.itemDetailLine[itemNr].discountAmount",
    enhancedSchemeDataItemDetailLineItemNrProductCode:
      "enhancedSchemeData.itemDetailLine[itemNr].productCode",
    enhancedSchemeDataItemDetailLineItemNrQuantity: "enhancedSchemeData.itemDetailLine[itemNr].quantity",
    enhancedSchemeDataItemDetailLineItemNrTotalAmount:
      "enhancedSchemeData.itemDetailLine[itemNr].totalAmount",
    enhancedSchemeDataItemDetailLineItemNrUnitOfMeasure:
      "enhancedSchemeData.itemDetailLine[itemNr].unitOfMeasure",
    enhancedSchemeDataItemDetailLineItemNrUnitPrice: "enhancedSchemeData.itemDetailLine[itemNr].unitPrice",
    enhancedSchemeDataOrderDate: "enhancedSchemeData.orderDate",
    enhancedSchemeDataShipFromPostalCode: "enhancedSchemeData.shipFromPostalCode",
    enhancedSchemeDataTotalTaxAmount: "enhancedSchemeData.totalTaxAmount",
  },
});
