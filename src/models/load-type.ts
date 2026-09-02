import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LoadType = {
  MerchandiseReturn: "merchandiseReturn",
  Load: "load",
} as const;
export type LoadType = (typeof LoadType)[keyof typeof LoadType] | (string & {});

export const loadTypeSchema: EnumSchema<LoadType> = s.enumOf<LoadType>(LoadType);
