import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";
import {
  deliveryAddressIndicatorSchema,
  type DeliveryAddressIndicator,
} from "./delivery-address-indicator.js";
import { deliveryTimeframeSchema, type DeliveryTimeframe } from "./delivery-timeframe.js";

export type MerchantRiskIndicator11 = {
  addressMatch?: boolean;
  deliveryAddressIndicator?: DeliveryAddressIndicator;
  deliveryEmail?: string;
  deliveryEmailAddress?: string;
  deliveryTimeframe?: DeliveryTimeframe;
  giftCardAmount?: Amount;
  giftCardCount?: number;
  giftCardCurr?: string;
  preOrderDate?: Date;
  preOrderPurchase?: boolean;
  preOrderPurchaseInd?: string;
  reorderItems?: boolean;
  reorderItemsInd?: string;
  shipIndicator?: string;
};

export const merchantRiskIndicator11Schema: Schema<MerchantRiskIndicator11> =
  s.object<MerchantRiskIndicator11>({
    addressMatch: s.optional(s.boolean()),
    deliveryAddressIndicator: s.optional(s.lazy(() => deliveryAddressIndicatorSchema)),
    deliveryEmail: s.optional(s.string()),
    deliveryEmailAddress: s.optional(s.string()),
    deliveryTimeframe: s.optional(s.lazy(() => deliveryTimeframeSchema)),
    giftCardAmount: s.optional(s.lazy(() => amountSchema)),
    giftCardCount: s.optional(s.number()),
    giftCardCurr: s.optional(s.string()),
    preOrderDate: s.optional(s.dateTime()),
    preOrderPurchase: s.optional(s.boolean()),
    preOrderPurchaseInd: s.optional(s.string()),
    reorderItems: s.optional(s.boolean()),
    reorderItemsInd: s.optional(s.string()),
    shipIndicator: s.optional(s.string()),
  });
