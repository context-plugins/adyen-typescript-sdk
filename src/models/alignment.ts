import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Alignment = {
  Left: "Left",
  Right: "Right",
  Centred: "Centred",
  Justified: "Justified",
} as const;
export type Alignment = (typeof Alignment)[keyof typeof Alignment] | (string & {});

export const alignmentSchema: EnumSchema<Alignment> = s.enumOf<Alignment>(Alignment);
