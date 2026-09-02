import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Alignment1 = {
  Left: "Left",
  Right: "Right",
  Centred: "Centred",
  Justified: "Justified",
} as const;
export type Alignment1 = (typeof Alignment1)[keyof typeof Alignment1] | (string & {});

export const alignment1Schema: EnumSchema<Alignment1> = s.enumOf<Alignment1>(Alignment1);
