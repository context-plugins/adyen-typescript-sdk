import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Character height of the text string to display or print. Absence of this data element means the
 * characters have normal height. Possible values:
 * * **DoubleHeight**
 * * **HalfHeight**
 * * **SingleHeight**
 */
export const CharacterHeight1 = {
  SingleHeight: "SingleHeight",
  DoubleHeight: "DoubleHeight",
  HalfHeight: "HalfHeight",
} as const;
export type CharacterHeight1 = (typeof CharacterHeight1)[keyof typeof CharacterHeight1] | (string & {});

export const characterHeight1Schema: EnumSchema<CharacterHeight1> =
  s.enumOf<CharacterHeight1>(CharacterHeight1);
