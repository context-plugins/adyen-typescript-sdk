import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * **zip**
 */
export const Type58 = {
  Zip: "zip",
  ZipPos: "zip_pos",
} as const;
export type Type58 = (typeof Type58)[keyof typeof Type58] | (string & {});

export const type58Schema: EnumSchema<Type58> = s.enumOf<Type58>(Type58);
