import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { shopperIdPaymentMethod1Schema, type ShopperIdPaymentMethod1 } from "./shopper-id-payment-method1.js";

export type ValidateShopperIdRequest = {
  merchantAccount: string;
  paymentMethod: ShopperIdPaymentMethod1;
  shopperEmail?: string;
  shopperIp?: string;
  shopperReference?: string;
};

export const validateShopperIdRequestSchema: Schema<ValidateShopperIdRequest> =
  s.object<ValidateShopperIdRequest>({
    merchantAccount: s.string(),
    paymentMethod: shopperIdPaymentMethod1Schema,
    shopperEmail: s.optional(s.string()),
    shopperIp: s.optional(s.string()),
    shopperReference: s.optional(s.string()),
    _keysMap: {
      shopperIp: "shopperIP",
    },
  });
