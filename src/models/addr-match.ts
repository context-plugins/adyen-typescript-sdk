import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AddrMatch = {
  Y: "Y",
  N: "N",
} as const;
export type AddrMatch = (typeof AddrMatch)[keyof typeof AddrMatch] | (string & {});

export const addrMatchSchema: EnumSchema<AddrMatch> = s.enumOf<AddrMatch>(AddrMatch);
