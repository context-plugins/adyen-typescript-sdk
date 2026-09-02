import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MandateType = {
  Bacs: "bacs",
} as const;
export type MandateType = (typeof MandateType)[keyof typeof MandateType] | (string & {});

export const mandateTypeSchema: EnumSchema<MandateType> = s.enumOf<MandateType>(MandateType);
