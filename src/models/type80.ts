import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type80 = {
  AcquiringFees: "AcquiringFees",
  AdyenCommission: "AdyenCommission",
  AdyenFees: "AdyenFees",
  AdyenMarkup: "AdyenMarkup",
  BalanceAccount: "BalanceAccount",
  Commission: "Commission",
  Default: "Default",
  Interchange: "Interchange",
  MarketPlace: "MarketPlace",
  PaymentFee: "PaymentFee",
  Remainder: "Remainder",
  SchemeFee: "SchemeFee",
  Surcharge: "Surcharge",
  Tip: "Tip",
  Vat: "VAT",
} as const;
export type Type80 = (typeof Type80)[keyof typeof Type80] | (string & {});

export const type80Schema: EnumSchema<Type80> = s.enumOf<Type80>(Type80);
