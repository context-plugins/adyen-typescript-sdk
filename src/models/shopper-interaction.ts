import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ShopperInteraction = {
  Ecommerce: "Ecommerce",
  ContAuth: "ContAuth",
  Moto: "Moto",
  Pos: "POS",
} as const;
export type ShopperInteraction = (typeof ShopperInteraction)[keyof typeof ShopperInteraction] | (string & {});

export const shopperInteractionSchema: EnumSchema<ShopperInteraction> =
  s.enumOf<ShopperInteraction>(ShopperInteraction);
