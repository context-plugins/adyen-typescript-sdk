import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of flow to initiate. */
export const Subtype = {
  Express: "express",
  Redirect: "redirect",
  Sdk: "sdk",
} as const;
export type Subtype = (typeof Subtype)[keyof typeof Subtype] | (string & {});

export const subtypeSchema: EnumSchema<Subtype> = s.enumOf<Subtype>(Subtype);
