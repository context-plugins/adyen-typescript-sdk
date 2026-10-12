import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Possible values:
 * * **SingleHeight**
 * * **DoubleHeight**
 * * **HalfHeight**
 */
export const CharacterHeight = {
  SingleHeight: "SingleHeight",
  DoubleHeight: "DoubleHeight",
  HalfHeight: "HalfHeight",
} as const;
export type CharacterHeight = (typeof CharacterHeight)[keyof typeof CharacterHeight] | (string & {});

export const characterHeightSchema: EnumSchema<CharacterHeight> = s.enumOf<CharacterHeight>(CharacterHeight);
