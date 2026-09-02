import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type11 = {
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
  TopUp: "TopUp",
  Vat: "VAT",
} as const;
export type Type11 = (typeof Type11)[keyof typeof Type11] | (string & {});

export const type11Schema: EnumSchema<Type11> = s.enumOf<Type11>(Type11);
