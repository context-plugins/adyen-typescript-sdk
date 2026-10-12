import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Character width of the text string to display or print. Absence of this data element means the
 * characters have normal width. Possible values:
 * * **DoubleWidth**
 * * **SingleWidth**
 */
export const CharacterWidth1 = {
  SingleWidth: "SingleWidth",
  DoubleWidth: "DoubleWidth",
} as const;
export type CharacterWidth1 = (typeof CharacterWidth1)[keyof typeof CharacterWidth1] | (string & {});

export const characterWidth1Schema: EnumSchema<CharacterWidth1> = s.enumOf<CharacterWidth1>(CharacterWidth1);
