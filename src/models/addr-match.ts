import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether the cardholder shipping address and cardholder billing address are the same.
 * Allowed values:
 * * **Y** — Shipping address matches billing address.
 * * **N** — Shipping address does not match billing address.
 */
export const AddrMatch = {
  Y: "Y",
  N: "N",
} as const;
export type AddrMatch = (typeof AddrMatch)[keyof typeof AddrMatch] | (string & {});

export const addrMatchSchema: EnumSchema<AddrMatch> = s.enumOf<AddrMatch>(AddrMatch);
