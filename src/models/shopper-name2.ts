import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The shopper's full name. */
export type ShopperName2 = {
  /** The first name. */
  firstName: string;
  /** The last name. */
  lastName: string;
};

export const shopperName2Schema: Schema<ShopperName2> = s.object<ShopperName2>({
  firstName: s.string(),
  lastName: s.string(),
});
