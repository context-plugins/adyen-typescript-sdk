import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LineItem = {
  /**
   * Item amount excluding the tax, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes/#minor-units).
   */
  amountExcludingTax?: number;
  /**
   * Item amount including the tax, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes/#minor-units).
   */
  amountIncludingTax?: number;
  /** Brand of the item. */
  brand?: string;
  /** Color of the item. */
  color?: string;
  /** Description of the line item. */
  description?: string;
  /** ID of the line item. */
  id?: string;
  /** Link to the picture of the purchased item. */
  imageUrl?: string;
  /** Item category, used by the payment methods PayPal and Ratepay. */
  itemCategory?: string;
  /** Manufacturer of the item. */
  manufacturer?: string;
  /** Marketplace seller id. */
  marketplaceSellerId?: string;
  /** Link to the purchased item. */
  productUrl?: string;
  /** Number of items. */
  quantity?: number;
  /** Email associated with the given product in the basket (usually in electronic gift cards). */
  receiverEmail?: string;
  /** Shipping company handling the return of the item. */
  returnShippingCompany?: string;
  /** Tracking number for the return of the item. */
  returnTrackingNumber?: string;
  /** Tracking URI for the return of the item. */
  returnTrackingUri?: string;
  /** Shipping company handling the delivery of the item. */
  shippingCompany?: string;
  /** Shipping method used to deliver the item. */
  shippingMethod?: string;
  /** Size of the item. */
  size?: string;
  /** Stock keeping unit. */
  sku?: string;
  /**
   * Tax amount, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes/#minor-units).
   */
  taxAmount?: number;
  /**
   * Tax percentage, represented as a [basis point](https://en.wikipedia.org/wiki/Basis_point)
   * integer. For example:
   *  - **530** for 5.3% (five point three percent)
   *  - **2100** for 21% (twenty-one percent)
   */
  taxPercentage?: number;
  /** Tracking number for the delivery of the item. */
  trackingNumber?: string;
  /** Tracking URI for the delivery of the item. */
  trackingUri?: string;
  /** Universal Product Code. */
  upc?: string;
};

export const lineItemSchema: Schema<LineItem> = s.object<LineItem>({
  amountExcludingTax: s.optional(s.int()),
  amountIncludingTax: s.optional(s.int()),
  brand: s.optional(s.string()),
  color: s.optional(s.string()),
  description: s.optional(s.string()),
  id: s.optional(s.string()),
  imageUrl: s.optional(s.string()),
  itemCategory: s.optional(s.string()),
  manufacturer: s.optional(s.string()),
  marketplaceSellerId: s.optional(s.string()),
  productUrl: s.optional(s.string()),
  quantity: s.optional(s.int()),
  receiverEmail: s.optional(s.string()),
  returnShippingCompany: s.optional(s.string()),
  returnTrackingNumber: s.optional(s.string()),
  returnTrackingUri: s.optional(s.string()),
  shippingCompany: s.optional(s.string()),
  shippingMethod: s.optional(s.string()),
  size: s.optional(s.string()),
  sku: s.optional(s.string()),
  taxAmount: s.optional(s.int()),
  taxPercentage: s.optional(s.int()),
  trackingNumber: s.optional(s.string()),
  trackingUri: s.optional(s.string()),
  upc: s.optional(s.string()),
});
