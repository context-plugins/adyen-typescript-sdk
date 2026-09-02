import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RequiredShopperField = {
  BillingAddress: "billingAddress",
  DeliveryAddress: "deliveryAddress",
  ShopperEmail: "shopperEmail",
  ShopperName: "shopperName",
  TelephoneNumber: "telephoneNumber",
} as const;
export type RequiredShopperField =
  | (typeof RequiredShopperField)[keyof typeof RequiredShopperField]
  | (string & {});

export const requiredShopperFieldSchema: EnumSchema<RequiredShopperField> =
  s.enumOf<RequiredShopperField>(RequiredShopperField);
