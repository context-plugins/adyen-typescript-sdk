import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of the entity that you are associating with the SCA device.
 *
 * Possible values: **accountHolder**, **legalEntity** or **paymentInstrument**.
 */
export const ScaEntityType4 = {
  AccountHolder: "accountHolder",
  LegalEntity: "legalEntity",
  PaymentInstrument: "paymentInstrument",
} as const;
export type ScaEntityType4 = (typeof ScaEntityType4)[keyof typeof ScaEntityType4] | (string & {});

export const scaEntityType4Schema: EnumSchema<ScaEntityType4> = s.enumOf<ScaEntityType4>(ScaEntityType4);
