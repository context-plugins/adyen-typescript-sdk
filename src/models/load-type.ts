import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of load you are trying to do, when absent we default to 'load' */
export const LoadType = {
  MerchandiseReturn: "merchandiseReturn",
  Load: "load",
} as const;
export type LoadType = (typeof LoadType)[keyof typeof LoadType] | (string & {});

export const loadTypeSchema: EnumSchema<LoadType> = s.enumOf<LoadType>(LoadType);
