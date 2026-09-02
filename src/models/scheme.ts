import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Scheme = {
  Mc: "mc",
  Visa: "visa",
} as const;
export type Scheme = (typeof Scheme)[keyof typeof Scheme] | (string & {});

export const schemeSchema: EnumSchema<Scheme> = s.enumOf<Scheme>(Scheme);
