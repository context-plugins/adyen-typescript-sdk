import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ItemDetailLine = {
  commodityCode?: string;
  description?: string;
  discountAmount?: number;
  productCode?: string;
  quantity?: number;
  totalAmount?: number;
  unitOfMeasure?: string;
  unitPrice?: number;
};

export const itemDetailLineSchema: Schema<ItemDetailLine> = s.object<ItemDetailLine>({
  commodityCode: s.optional(s.string()),
  description: s.optional(s.string()),
  discountAmount: s.optional(s.number()),
  productCode: s.optional(s.string()),
  quantity: s.optional(s.number()),
  totalAmount: s.optional(s.number()),
  unitOfMeasure: s.optional(s.string()),
  unitPrice: s.optional(s.number()),
});
