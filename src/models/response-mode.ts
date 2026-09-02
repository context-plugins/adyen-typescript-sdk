import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ResponseMode = {
  NotRequired: "NotRequired",
  Immediate: "Immediate",
  PrintEnd: "PrintEnd",
  SoundEnd: "SoundEnd",
} as const;
export type ResponseMode = (typeof ResponseMode)[keyof typeof ResponseMode] | (string & {});

export const responseModeSchema: EnumSchema<ResponseMode> = s.enumOf<ResponseMode>(ResponseMode);
