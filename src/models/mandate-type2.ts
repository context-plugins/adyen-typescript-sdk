import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MandateType2 = {
  Bacs: "bacs",
} as const;
export type MandateType2 = (typeof MandateType2)[keyof typeof MandateType2] | (string & {});

export const mandateType2Schema: EnumSchema<MandateType2> = s.enumOf<MandateType2>(MandateType2);
