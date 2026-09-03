import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type45 = {
  PaybybankPix: "paybybank_pix",
} as const;
export type Type45 = (typeof Type45)[keyof typeof Type45] | (string & {});

export const type45Schema: EnumSchema<Type45> = s.enumOf<Type45>(Type45);
