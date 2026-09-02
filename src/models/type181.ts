import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type181 = {
  CzLocal: "czLocal",
} as const;
export type Type181 = (typeof Type181)[keyof typeof Type181] | (string & {});

export const type181Schema: EnumSchema<Type181> = s.enumOf<Type181>(Type181);
