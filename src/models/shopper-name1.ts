import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ShopperName1 = {
  firstName: string;
  lastName: string;
};

export const shopperName1Schema: Schema<ShopperName1> = s.object<ShopperName1>({
  firstName: s.string(),
  lastName: s.string(),
});
