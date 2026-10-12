import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Message response awaited by the initiator of the Request. Allows various types and
 * synchronisation of requests for Print or Sound. Possible values:
 * * **Immediate**
 * * **NotRequired**
 * * **PrintEnd**
 * * **SoundEnd**
 */
export const ResponseMode1 = {
  NotRequired: "NotRequired",
  Immediate: "Immediate",
  PrintEnd: "PrintEnd",
  SoundEnd: "SoundEnd",
} as const;
export type ResponseMode1 = (typeof ResponseMode1)[keyof typeof ResponseMode1] | (string & {});

export const responseMode1Schema: EnumSchema<ResponseMode1> = s.enumOf<ResponseMode1>(ResponseMode1);
