import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TrackFormat = {
  Iso: "ISO",
  JisI: "JIS-I",
  JisIi: "JIS-II",
  Aamva: "AAMVA",
  Cmc7: "CMC-7",
  E13B: "E-13B",
} as const;
export type TrackFormat = (typeof TrackFormat)[keyof typeof TrackFormat] | (string & {});

export const trackFormatSchema: EnumSchema<TrackFormat> = s.enumOf<TrackFormat>(TrackFormat);
