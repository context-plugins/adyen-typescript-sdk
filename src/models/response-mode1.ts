import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ResponseMode1 = {
  NotRequired: "NotRequired",
  Immediate: "Immediate",
  PrintEnd: "PrintEnd",
  SoundEnd: "SoundEnd",
} as const;
export type ResponseMode1 = (typeof ResponseMode1)[keyof typeof ResponseMode1] | (string & {});

export const responseMode1Schema: EnumSchema<ResponseMode1> = s.enumOf<ResponseMode1>(ResponseMode1);
