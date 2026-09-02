import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ShopperIdPaymentMethod1 = {
  type?: string;
};

export const shopperIdPaymentMethod1Schema: Schema<ShopperIdPaymentMethod1> =
  s.object<ShopperIdPaymentMethod1>({
    type: s.optional(s.string()),
  });
