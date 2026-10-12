import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of the entity.
 *
 * Possible values: **accountHolder**, **legalEntity** or **paymentInstrument**.
 */
export const ScaEntityType2 = {
  AccountHolder: "accountHolder",
  LegalEntity: "legalEntity",
  PaymentInstrument: "paymentInstrument",
} as const;
export type ScaEntityType2 = (typeof ScaEntityType2)[keyof typeof ScaEntityType2] | (string & {});

export const scaEntityType2Schema: EnumSchema<ScaEntityType2> = s.enumOf<ScaEntityType2>(ScaEntityType2);
