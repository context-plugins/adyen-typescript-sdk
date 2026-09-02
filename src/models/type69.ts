import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type69 = {
  Twint: "twint",
} as const;
export type Type69 = (typeof Type69)[keyof typeof Type69] | (string & {});

export const type69Schema: EnumSchema<Type69> = s.enumOf<Type69>(Type69);
