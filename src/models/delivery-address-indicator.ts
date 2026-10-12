import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
export const DeliveryAddressIndicator = {
  ShipToBillingAddress: "shipToBillingAddress",
  ShipToVerifiedAddress: "shipToVerifiedAddress",
  ShipToNewAddress: "shipToNewAddress",
  ShipToStore: "shipToStore",
  DigitalGoods: "digitalGoods",
  GoodsNotShipped: "goodsNotShipped",
  Other: "other",
} as const;
export type DeliveryAddressIndicator =
  | (typeof DeliveryAddressIndicator)[keyof typeof DeliveryAddressIndicator]
  | (string & {});

export const deliveryAddressIndicatorSchema: EnumSchema<DeliveryAddressIndicator> =
  s.enumOf<DeliveryAddressIndicator>(DeliveryAddressIndicator);
