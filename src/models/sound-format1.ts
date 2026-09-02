import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SoundFormat1 = {
  SoundRef: "SoundRef",
  MessageRef: "MessageRef",
  Text: "Text",
} as const;
export type SoundFormat1 = (typeof SoundFormat1)[keyof typeof SoundFormat1] | (string & {});

export const soundFormat1Schema: EnumSchema<SoundFormat1> = s.enumOf<SoundFormat1>(SoundFormat1);
