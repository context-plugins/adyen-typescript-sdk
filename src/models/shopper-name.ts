import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ShopperName = {
  firstName: string;
  lastName: string;
};

export const shopperNameSchema: Schema<ShopperName> = s.object<ShopperName>({
  firstName: s.string(),
  lastName: s.string(),
});
