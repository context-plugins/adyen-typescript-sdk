import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ShopperTaxInfo2 = {
  taxCountryCode: string;
  taxIdentificationNumber: string;
};

export const shopperTaxInfo2Schema: Schema<ShopperTaxInfo2> = s.object<ShopperTaxInfo2>({
  taxCountryCode: s.string(),
  taxIdentificationNumber: s.string(),
});
