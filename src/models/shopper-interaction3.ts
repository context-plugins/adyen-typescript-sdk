import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies the sales channel, through which the shopper gives their card details, and whether the
 * shopper is a returning customer. For the web service API, Adyen assumes Ecommerce shopper
 * interaction by default.
 *
 * This field has the following possible values:
 * * `Ecommerce` - Online transactions where the cardholder is present (online). For better
 *   authorization rates, we recommend sending the card security code (CSC) along with the request.
 * * `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to
 *   the merchant (returning customer). If the shopper is present (online), you can supply also the
 *   CSC to improve authorization (one-click payment).
 * * `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the
 *   merchant via email or telephone.
 * * `POS` - Point-of-sale transactions where the shopper is physically present to make a payment
 *   using a secure payment terminal.
 */
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
