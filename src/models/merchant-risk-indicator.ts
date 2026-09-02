import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount7Schema, type Amount7 } from "./amount7.js";
import {
  deliveryAddressIndicatorSchema,
  type DeliveryAddressIndicator,
} from "./delivery-address-indicator.js";
import { deliveryTimeframeSchema, type DeliveryTimeframe } from "./delivery-timeframe.js";

export type MerchantRiskIndicator = {
  addressMatch?: boolean;
  deliveryAddressIndicator?: DeliveryAddressIndicator;
  deliveryEmail?: string;
  deliveryEmailAddress?: string;
  deliveryTimeframe?: DeliveryTimeframe;
  giftCardAmount?: Amount7;
  giftCardCount?: number;
  giftCardCurr?: string;
  preOrderDate?: Date;
  preOrderPurchase?: boolean;
  preOrderPurchaseInd?: string;
  reorderItems?: boolean;
  reorderItemsInd?: string;
  shipIndicator?: string;
};

export const merchantRiskIndicatorSchema: Schema<MerchantRiskIndicator> = s.object<MerchantRiskIndicator>({
  addressMatch: s.optional(s.boolean()),
  deliveryAddressIndicator: s.optional(s.lazy(() => deliveryAddressIndicatorSchema)),
  deliveryEmail: s.optional(s.string()),
  deliveryEmailAddress: s.optional(s.string()),
  deliveryTimeframe: s.optional(s.lazy(() => deliveryTimeframeSchema)),
  giftCardAmount: s.optional(s.lazy(() => amount7Schema)),
  giftCardCount: s.optional(s.number()),
  giftCardCurr: s.optional(s.string()),
  preOrderDate: s.optional(s.dateTime()),
  preOrderPurchase: s.optional(s.boolean()),
  preOrderPurchaseInd: s.optional(s.string()),
  reorderItems: s.optional(s.boolean()),
  reorderItemsInd: s.optional(s.string()),
  shipIndicator: s.optional(s.string()),
});
