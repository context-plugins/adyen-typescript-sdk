import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PlatformPaymentType = {
  AcquiringFees: "AcquiringFees",
  AdyenCommission: "AdyenCommission",
  AdyenFees: "AdyenFees",
  AdyenMarkup: "AdyenMarkup",
  BalanceAccount: "BalanceAccount",
  ChargebackRemainder: "ChargebackRemainder",
  Commission: "Commission",
  DccMarkup: "DCCMarkup",
  DccPlatformCommission: "DCCPlatformCommission",
  Default: "Default",
  Interchange: "Interchange",
  PaymentFee: "PaymentFee",
  Remainder: "Remainder",
  SchemeFee: "SchemeFee",
  Surcharge: "Surcharge",
  Tip: "Tip",
  TopUp: "TopUp",
  Vat: "VAT",
} as const;
export type PlatformPaymentType =
  | (typeof PlatformPaymentType)[keyof typeof PlatformPaymentType]
  | (string & {});

export const platformPaymentTypeSchema: EnumSchema<PlatformPaymentType> =
  s.enumOf<PlatformPaymentType>(PlatformPaymentType);
