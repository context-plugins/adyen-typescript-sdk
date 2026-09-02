import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CardRegion = {
  International: "international",
  IntraEea: "intraEEA",
  IntraRegional: "intraRegional",
  InterRegional: "interRegional",
  Domestic: "domestic",
  Any: "ANY",
} as const;
export type CardRegion = (typeof CardRegion)[keyof typeof CardRegion] | (string & {});

export const cardRegionSchema: EnumSchema<CardRegion> = s.enumOf<CardRegion>(CardRegion);
