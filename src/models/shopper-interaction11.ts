import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The sales channel condition that defines whether the split logic applies.
 *
 * Possible values:
 * * **Ecommerce**: Online transactions where the cardholder is present.
 * * **ContAuth**: Card on file and/or subscription transactions, where the cardholder is known to
 *   the merchant (returning customer).
 * * **Moto**: Mail-order and telephone-order transactions where the customer is in contact with the
 *   merchant via email or telephone.
 * * **POS**: Point-of-sale transactions where the customer is physically present to make a payment
 *   using a secure payment terminal.
 * * **ANY**: All sales channels.
 */
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
