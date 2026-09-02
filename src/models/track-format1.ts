import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TrackFormat1 = {
  Iso: "ISO",
  JisI: "JIS-I",
  JisIi: "JIS-II",
  Aamva: "AAMVA",
  Cmc7: "CMC-7",
  E13B: "E-13B",
} as const;
export type TrackFormat1 = (typeof TrackFormat1)[keyof typeof TrackFormat1] | (string & {});

export const trackFormat1Schema: EnumSchema<TrackFormat1> = s.enumOf<TrackFormat1>(TrackFormat1);
