import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ShopperName2 = {
  firstName: string;
  lastName: string;
};

export const shopperName2Schema: Schema<ShopperName2> = s.object<ShopperName2>({
  firstName: s.string(),
  lastName: s.string(),
});
