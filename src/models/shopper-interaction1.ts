import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ShopperInteraction1 = {
  ECommerce: "eCommerce",
  Pos: "pos",
  Moto: "moto",
  ContAuth: "contAuth",
} as const;
export type ShopperInteraction1 =
  | (typeof ShopperInteraction1)[keyof typeof ShopperInteraction1]
  | (string & {});

export const shopperInteraction1Schema: EnumSchema<ShopperInteraction1> =
  s.enumOf<ShopperInteraction1>(ShopperInteraction1);
