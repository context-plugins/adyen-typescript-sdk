import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RateType = {
  Daily: "daily",
  Weekly: "weekly",
} as const;
export type RateType = (typeof RateType)[keyof typeof RateType] | (string & {});

export const rateTypeSchema: EnumSchema<RateType> = s.enumOf<RateType>(RateType);
