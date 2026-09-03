import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type60 = {
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
export type Type60 = (typeof Type60)[keyof typeof Type60] | (string & {});

export const type60Schema: EnumSchema<Type60> = s.enumOf<Type60>(Type60);
