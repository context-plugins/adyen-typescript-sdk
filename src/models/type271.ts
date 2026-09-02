import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type271 = {
  SeLocal: "seLocal",
} as const;
export type Type271 = (typeof Type271)[keyof typeof Type271] | (string & {});

export const type271Schema: EnumSchema<Type271> = s.enumOf<Type271>(Type271);
