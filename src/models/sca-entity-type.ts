import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ScaEntityType = {
  AccountHolder: "accountHolder",
  LegalEntity: "legalEntity",
  PaymentInstrument: "paymentInstrument",
} as const;
export type ScaEntityType = (typeof ScaEntityType)[keyof typeof ScaEntityType] | (string & {});

export const scaEntityTypeSchema: EnumSchema<ScaEntityType> = s.enumOf<ScaEntityType>(ScaEntityType);
