import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CharacterHeight1 = {
  SingleHeight: "SingleHeight",
  DoubleHeight: "DoubleHeight",
  HalfHeight: "HalfHeight",
} as const;
export type CharacterHeight1 = (typeof CharacterHeight1)[keyof typeof CharacterHeight1] | (string & {});

export const characterHeight1Schema: EnumSchema<CharacterHeight1> =
  s.enumOf<CharacterHeight1>(CharacterHeight1);
