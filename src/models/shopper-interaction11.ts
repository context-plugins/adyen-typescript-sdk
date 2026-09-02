import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ShopperInteraction11 = {
  Ecommerce: "Ecommerce",
  ContAuth: "ContAuth",
  Moto: "Moto",
  Pos: "POS",
  Any: "ANY",
} as const;
export type ShopperInteraction11 =
  | (typeof ShopperInteraction11)[keyof typeof ShopperInteraction11]
  | (string & {});

export const shopperInteraction11Schema: EnumSchema<ShopperInteraction11> =
  s.enumOf<ShopperInteraction11>(ShopperInteraction11);
