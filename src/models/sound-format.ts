import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Possible values:
 * * **SoundRef**
 * * **MessageRef**
 * * **Text**
 */
export const SoundFormat = {
  SoundRef: "SoundRef",
  MessageRef: "MessageRef",
  Text: "Text",
} as const;
export type SoundFormat = (typeof SoundFormat)[keyof typeof SoundFormat] | (string & {});

export const soundFormatSchema: EnumSchema<SoundFormat> = s.enumOf<SoundFormat>(SoundFormat);
