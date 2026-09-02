import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ShopperInteraction3 = {
  Ecommerce: "Ecommerce",
  ContAuth: "ContAuth",
  Moto: "Moto",
  Pos: "POS",
} as const;
export type ShopperInteraction3 =
  | (typeof ShopperInteraction3)[keyof typeof ShopperInteraction3]
  | (string & {});

export const shopperInteraction3Schema: EnumSchema<ShopperInteraction3> =
  s.enumOf<ShopperInteraction3>(ShopperInteraction3);
