import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ShopperTaxInfo = {
  taxCountryCode: string;
  taxIdentificationNumber: string;
};

export const shopperTaxInfoSchema: Schema<ShopperTaxInfo> = s.object<ShopperTaxInfo>({
  taxCountryCode: s.string(),
  taxIdentificationNumber: s.string(),
});
