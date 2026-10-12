import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdditionalDataOpenInvoice = {
  /**
   * Holds different merchant data points like product, purchase, customer, and so on. It takes data
   * in a Base64 encoded string.
   *
   * The `merchantData` parameter needs to be added to the `openinvoicedata` signature at the end.
   *
   * Since the field is optional, if it's not included it does not impact computing the merchant
   * signature.
   *
   * Applies only to Klarna.
   *
   * You can contact Klarna for the format and structure of the string.
   */
  openinvoicedataMerchantData?: string;
  /**
   * The number of invoice lines included in `openinvoicedata`.
   *
   * There needs to be at least one line, so `numberOfLines` needs to be at least 1.
   */
  openinvoicedataNumberOfLines?: string;
  /**
   * First name of the recipient. If the delivery address and the billing address are different,
   * specify the `recipientFirstName` and `recipientLastName` to share the delivery address with
   * Klarna. Otherwise, only the billing address is shared with Klarna.
   */
  openinvoicedataRecipientFirstName?: string;
  /**
   * Last name of the recipient. If the delivery address and the billing address are different,
   * specify the `recipientFirstName` and `recipientLastName` to share the delivery address with
   * Klarna. Otherwise, only the billing address is shared with Klarna.
   */
  openinvoicedataRecipientLastName?: string;
  /** The three-character ISO currency code. */
  openinvoicedataLineItemNrCurrencyCode?: string;
  /** A text description of the product the invoice line refers to. */
  openinvoicedataLineItemNrDescription?: string;
  /**
   * The price for one item in the invoice line, represented in minor units.
   *
   * The due amount for the item, VAT excluded.
   */
  openinvoicedataLineItemNrItemAmount?: string;
  /**
   * A unique id for this item. Required for RatePay if the description of each item is not unique.
   */
  openinvoicedataLineItemNrItemId?: string;
  /** The VAT due for one item in the invoice line, represented in minor units. */
  openinvoicedataLineItemNrItemVatAmount?: string;
  /**
   * The VAT percentage for one item in the invoice line, represented in minor units.
   *
   * For example, 19% VAT is specified as 1900.
   */
  openinvoicedataLineItemNrItemVatPercentage?: string;
  /** The number of units purchased of a specific product. */
  openinvoicedataLineItemNrNumberOfItems?: string;
  /** Name of the shipping company handling the the return shipment. */
  openinvoicedataLineItemNrReturnShippingCompany?: string;
  /** The tracking number for the return of the shipment. */
  openinvoicedataLineItemNrReturnTrackingNumber?: string;
  /** URI where the customer can track the return of their shipment. */
  openinvoicedataLineItemNrReturnTrackingUri?: string;
  /** Name of the shipping company handling the delivery. */
  openinvoicedataLineItemNrShippingCompany?: string;
  /** Shipping method. */
  openinvoicedataLineItemNrShippingMethod?: string;
  /** The tracking number for the shipment. */
  openinvoicedataLineItemNrTrackingNumber?: string;
  /** URI where the customer can track their shipment. */
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
