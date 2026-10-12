import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount7Schema, type Amount7 } from "./amount7.js";
import {
  deliveryAddressIndicatorSchema,
  type DeliveryAddressIndicator,
} from "./delivery-address-indicator.js";
import { deliveryTimeframeSchema, type DeliveryTimeframe } from "./delivery-timeframe.js";

/**
 * Additional risk fields for 3D Secure 2. > For 3D Secure 2 transactions, we recommend that you
 * include this object to increase the chances of achieving a frictionless flow.
 */
export type MerchantRiskIndicator1 = {
  /** Whether the chosen delivery address is identical to the billing address. */
  addressMatch?: boolean;
  /**
   * Indicator regarding the delivery address. Allowed values:
   * * `shipToBillingAddress`
   * * `shipToVerifiedAddress`
   * * `shipToNewAddress`
   * * `shipToStore`
   * * `digitalGoods`
   * * `goodsNotShipped`
   * * `other`
   */
  deliveryAddressIndicator?: DeliveryAddressIndicator;
  /**
   * The delivery email address (for digital goods).
   *
   * @deprecated
   */
  deliveryEmail?: string;
  /**
   * For Electronic delivery, the email address to which the merchandise was delivered. Maximum
   * length: 254 characters.
   */
  deliveryEmailAddress?: string;
  /**
   * The estimated delivery time for the shopper to receive the goods. Allowed values:
   * * `electronicDelivery`
   * * `sameDayShipping`
   * * `overnightShipping`
   * * `twoOrMoreDaysShipping`
   */
  deliveryTimeframe?: DeliveryTimeframe;
  /** For prepaid or gift card purchase, the purchase amount total of prepaid or gift card(s). */
  giftCardAmount?: Amount7;
  /**
   * For prepaid or gift card purchase, total count of individual prepaid or gift cards/codes
   * purchased.
   */
  giftCardCount?: number;
  /**
   * For prepaid or gift card purchase, [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html)
   * three-digit currency code of the gift card, other than those listed in Table A.5 of the EMVCo
   * 3D Secure Protocol and Core Functions Specification.
   */
  giftCardCurr?: string;
  /** For pre-order purchases, the expected date this product will be available to the shopper. */
  preOrderDate?: Date;
  /** Indicator for whether this transaction is for pre-ordering a product. */
  preOrderPurchase?: boolean;
  /**
   * Indicates whether Cardholder is placing an order for merchandise with a future availability or
   * release date.
   */
  preOrderPurchaseInd?: string;
  /** Indicator for whether the shopper has already purchased the same items in the past. */
  reorderItems?: boolean;
  /** Indicates whether the cardholder is reordering previously purchased merchandise. */
  reorderItemsInd?: string;
  /** Indicates shipping method chosen for the transaction. */
  shipIndicator?: string;
};

export const merchantRiskIndicator1Schema: Schema<MerchantRiskIndicator1> = s.object<MerchantRiskIndicator1>({
  addressMatch: s.optional(s.boolean()),
  deliveryAddressIndicator: s.optional(s.lazy(() => deliveryAddressIndicatorSchema)),
  deliveryEmail: s.optional(s.string()),
  deliveryEmailAddress: s.optional(s.string()),
  deliveryTimeframe: s.optional(s.lazy(() => deliveryTimeframeSchema)),
  giftCardAmount: s.optional(s.lazy(() => amount7Schema)),
  giftCardCount: s.optional(s.int()),
  giftCardCurr: s.optional(s.string()),
  preOrderDate: s.optional(s.dateTime()),
  preOrderPurchase: s.optional(s.boolean()),
  preOrderPurchaseInd: s.optional(s.string()),
  reorderItems: s.optional(s.boolean()),
  reorderItemsInd: s.optional(s.string()),
  shipIndicator: s.optional(s.string()),
});
