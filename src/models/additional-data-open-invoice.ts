import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdditionalDataOpenInvoice = {
  openinvoicedataMerchantData?: string;
  openinvoicedataNumberOfLines?: string;
  openinvoicedataRecipientFirstName?: string;
  openinvoicedataRecipientLastName?: string;
  openinvoicedataLineItemNrCurrencyCode?: string;
  openinvoicedataLineItemNrDescription?: string;
  openinvoicedataLineItemNrItemAmount?: string;
  openinvoicedataLineItemNrItemId?: string;
  openinvoicedataLineItemNrItemVatAmount?: string;
  openinvoicedataLineItemNrItemVatPercentage?: string;
  openinvoicedataLineItemNrNumberOfItems?: string;
  openinvoicedataLineItemNrReturnShippingCompany?: string;
  openinvoicedataLineItemNrReturnTrackingNumber?: string;
  openinvoicedataLineItemNrReturnTrackingUri?: string;
  openinvoicedataLineItemNrShippingCompany?: string;
  openinvoicedataLineItemNrShippingMethod?: string;
  openinvoicedataLineItemNrTrackingNumber?: string;
  openinvoicedataLineItemNrTrackingUri?: string;
};

export const additionalDataOpenInvoiceSchema: Schema<AdditionalDataOpenInvoice> =
  s.object<AdditionalDataOpenInvoice>({
    openinvoicedataMerchantData: s.optional(s.string()),
    openinvoicedataNumberOfLines: s.optional(s.string()),
    openinvoicedataRecipientFirstName: s.optional(s.string()),
    openinvoicedataRecipientLastName: s.optional(s.string()),
    openinvoicedataLineItemNrCurrencyCode: s.optional(s.string()),
    openinvoicedataLineItemNrDescription: s.optional(s.string()),
    openinvoicedataLineItemNrItemAmount: s.optional(s.string()),
    openinvoicedataLineItemNrItemId: s.optional(s.string()),
    openinvoicedataLineItemNrItemVatAmount: s.optional(s.string()),
    openinvoicedataLineItemNrItemVatPercentage: s.optional(s.string()),
    openinvoicedataLineItemNrNumberOfItems: s.optional(s.string()),
    openinvoicedataLineItemNrReturnShippingCompany: s.optional(s.string()),
    openinvoicedataLineItemNrReturnTrackingNumber: s.optional(s.string()),
    openinvoicedataLineItemNrReturnTrackingUri: s.optional(s.string()),
    openinvoicedataLineItemNrShippingCompany: s.optional(s.string()),
    openinvoicedataLineItemNrShippingMethod: s.optional(s.string()),
    openinvoicedataLineItemNrTrackingNumber: s.optional(s.string()),
    openinvoicedataLineItemNrTrackingUri: s.optional(s.string()),
    _keysMap: {
      openinvoicedataMerchantData: "openinvoicedata.merchantData",
      openinvoicedataNumberOfLines: "openinvoicedata.numberOfLines",
      openinvoicedataRecipientFirstName: "openinvoicedata.recipientFirstName",
      openinvoicedataRecipientLastName: "openinvoicedata.recipientLastName",
      openinvoicedataLineItemNrCurrencyCode: "openinvoicedataLine[itemNr].currencyCode",
      openinvoicedataLineItemNrDescription: "openinvoicedataLine[itemNr].description",
      openinvoicedataLineItemNrItemAmount: "openinvoicedataLine[itemNr].itemAmount",
      openinvoicedataLineItemNrItemId: "openinvoicedataLine[itemNr].itemId",
      openinvoicedataLineItemNrItemVatAmount: "openinvoicedataLine[itemNr].itemVatAmount",
      openinvoicedataLineItemNrItemVatPercentage: "openinvoicedataLine[itemNr].itemVatPercentage",
      openinvoicedataLineItemNrNumberOfItems: "openinvoicedataLine[itemNr].numberOfItems",
      openinvoicedataLineItemNrReturnShippingCompany: "openinvoicedataLine[itemNr].returnShippingCompany",
      openinvoicedataLineItemNrReturnTrackingNumber: "openinvoicedataLine[itemNr].returnTrackingNumber",
      openinvoicedataLineItemNrReturnTrackingUri: "openinvoicedataLine[itemNr].returnTrackingUri",
      openinvoicedataLineItemNrShippingCompany: "openinvoicedataLine[itemNr].shippingCompany",
      openinvoicedataLineItemNrShippingMethod: "openinvoicedataLine[itemNr].shippingMethod",
      openinvoicedataLineItemNrTrackingNumber: "openinvoicedataLine[itemNr].trackingNumber",
      openinvoicedataLineItemNrTrackingUri: "openinvoicedataLine[itemNr].trackingUri",
    },
  });
