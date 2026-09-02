import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LineItem = {
  amountExcludingTax?: number;
  amountIncludingTax?: number;
  brand?: string;
  color?: string;
  description?: string;
  id?: string;
  imageUrl?: string;
  itemCategory?: string;
  manufacturer?: string;
  marketplaceSellerId?: string;
  productUrl?: string;
  quantity?: number;
  receiverEmail?: string;
  returnShippingCompany?: string;
  returnTrackingNumber?: string;
  returnTrackingUri?: string;
  shippingCompany?: string;
  shippingMethod?: string;
  size?: string;
  sku?: string;
  taxAmount?: number;
  taxPercentage?: number;
  trackingNumber?: string;
  trackingUri?: string;
  upc?: string;
};

export const lineItemSchema: Schema<LineItem> = s.object<LineItem>({
  amountExcludingTax: s.optional(s.number()),
  amountIncludingTax: s.optional(s.number()),
  brand: s.optional(s.string()),
  color: s.optional(s.string()),
  description: s.optional(s.string()),
  id: s.optional(s.string()),
  imageUrl: s.optional(s.string()),
  itemCategory: s.optional(s.string()),
  manufacturer: s.optional(s.string()),
  marketplaceSellerId: s.optional(s.string()),
  productUrl: s.optional(s.string()),
  quantity: s.optional(s.number()),
  receiverEmail: s.optional(s.string()),
  returnShippingCompany: s.optional(s.string()),
  returnTrackingNumber: s.optional(s.string()),
  returnTrackingUri: s.optional(s.string()),
  shippingCompany: s.optional(s.string()),
  shippingMethod: s.optional(s.string()),
  size: s.optional(s.string()),
  sku: s.optional(s.string()),
  taxAmount: s.optional(s.number()),
  taxPercentage: s.optional(s.number()),
  trackingNumber: s.optional(s.string()),
  trackingUri: s.optional(s.string()),
  upc: s.optional(s.string()),
});
