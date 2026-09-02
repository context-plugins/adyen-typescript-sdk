import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdditionalDataLevel23 = {
  enhancedSchemeDataCustomerReference?: string;
  enhancedSchemeDataDestinationCountryCode?: string;
  enhancedSchemeDataDestinationPostalCode?: string;
  enhancedSchemeDataDestinationStateProvinceCode?: string;
  enhancedSchemeDataDutyAmount?: string;
  enhancedSchemeDataFreightAmount?: string;
  enhancedSchemeDataItemDetailLineItemNrCommodityCode?: string;
  enhancedSchemeDataItemDetailLineItemNrDescription?: string;
  enhancedSchemeDataItemDetailLineItemNrDiscountAmount?: string;
  enhancedSchemeDataItemDetailLineItemNrProductCode?: string;
  enhancedSchemeDataItemDetailLineItemNrQuantity?: string;
  enhancedSchemeDataItemDetailLineItemNrTotalAmount?: string;
  enhancedSchemeDataItemDetailLineItemNrUnitOfMeasure?: string;
  enhancedSchemeDataItemDetailLineItemNrUnitPrice?: string;
  enhancedSchemeDataOrderDate?: string;
  enhancedSchemeDataShipFromPostalCode?: string;
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
