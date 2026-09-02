import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CharacterStyle1 = {
  Normal: "Normal",
  Bold: "Bold",
  Italic: "Italic",
  Underline: "Underline",
} as const;
export type CharacterStyle1 = (typeof CharacterStyle1)[keyof typeof CharacterStyle1] | (string & {});

export const characterStyle1Schema: EnumSchema<CharacterStyle1> = s.enumOf<CharacterStyle1>(CharacterStyle1);
