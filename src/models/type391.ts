import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type391 = {
  AllowList: "allowList",
  BlockList: "blockList",
  Bypass: "bypass",
  MaxUsage: "maxUsage",
  Velocity: "velocity",
} as const;
export type Type391 = (typeof Type391)[keyof typeof Type391] | (string & {});

export const type391Schema: EnumSchema<Type391> = s.enumOf<Type391>(Type391);
