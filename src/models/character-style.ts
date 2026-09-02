import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CharacterStyle = {
  Normal: "Normal",
  Bold: "Bold",
  Italic: "Italic",
  Underline: "Underline",
} as const;
export type CharacterStyle = (typeof CharacterStyle)[keyof typeof CharacterStyle] | (string & {});

export const characterStyleSchema: EnumSchema<CharacterStyle> = s.enumOf<CharacterStyle>(CharacterStyle);
