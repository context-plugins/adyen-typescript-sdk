import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The shopper's full name. This object is required for some payment methods such as AfterPay,
 * Klarna, or if you're enrolled in the PayPal Seller Protection program.
 */
export type ShopperName1 = {
  /** The first name. */
  firstName: string;
  /** The last name. */
  lastName: string;
};

export const shopperName1Schema: Schema<ShopperName1> = s.object<ShopperName1>({
  firstName: s.string(),
  lastName: s.string(),
});
