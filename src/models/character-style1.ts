import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Typographic style of the sequence of characters to display or print. Absence of this data element
 * means the characters have normal style. Possible values:
 * * **Bold**
 * * **Italic**
 * * **Normal**
 * * **Underline**
 */
export const CharacterStyle1 = {
  Normal: "Normal",
  Bold: "Bold",
  Italic: "Italic",
  Underline: "Underline",
} as const;
export type CharacterStyle1 = (typeof CharacterStyle1)[keyof typeof CharacterStyle1] | (string & {});

export const characterStyle1Schema: EnumSchema<CharacterStyle1> = s.enumOf<CharacterStyle1>(CharacterStyle1);
