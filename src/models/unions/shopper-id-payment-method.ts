import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { payToPaymentMethodSchema, type PayToPaymentMethod } from "../pay-to-payment-method.js";
import { upiPaymentMethodSchema, type UpiPaymentMethod } from "../upi-payment-method.js";

export type ShopperIdPaymentMethod =
  | (PayToPaymentMethod & { type: "payTo" })
  | (UpiPaymentMethod & { type: "upi_collect" });

export const shopperIdPaymentMethodSchema: Schema<ShopperIdPaymentMethod> =
  s.discriminatedUnion<ShopperIdPaymentMethod>("type", {
    payTo: payToPaymentMethodSchema,
    upi_collect: upiPaymentMethodSchema,
  });
