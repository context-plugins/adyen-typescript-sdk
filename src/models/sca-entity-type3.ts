import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of the entity.
 *
 * Possible values: **accountHolder**, **legalEntity** or **paymentInstrument**.
 */
export const ScaEntityType3 = {
  AccountHolder: "accountHolder",
  LegalEntity: "legalEntity",
  PaymentInstrument: "paymentInstrument",
} as const;
export type ScaEntityType3 = (typeof ScaEntityType3)[keyof typeof ScaEntityType3] | (string & {});

export const scaEntityType3Schema: EnumSchema<ScaEntityType3> = s.enumOf<ScaEntityType3>(ScaEntityType3);
