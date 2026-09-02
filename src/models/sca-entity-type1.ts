import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ScaEntityType1 = {
  AccountHolder: "accountHolder",
  LegalEntity: "legalEntity",
  PaymentInstrument: "paymentInstrument",
} as const;
export type ScaEntityType1 = (typeof ScaEntityType1)[keyof typeof ScaEntityType1] | (string & {});

export const scaEntityType1Schema: EnumSchema<ScaEntityType1> = s.enumOf<ScaEntityType1>(ScaEntityType1);
