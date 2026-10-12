import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Possible values:
 * * **SingleWidth**
 * * **DoubleWidth**
 */
export const CharacterWidth = {
  SingleWidth: "SingleWidth",
  DoubleWidth: "DoubleWidth",
} as const;
export type CharacterWidth = (typeof CharacterWidth)[keyof typeof CharacterWidth] | (string & {});

export const characterWidthSchema: EnumSchema<CharacterWidth> = s.enumOf<CharacterWidth>(CharacterWidth);
