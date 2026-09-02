import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type141 = {
  BrLocal: "brLocal",
} as const;
export type Type141 = (typeof Type141)[keyof typeof Type141] | (string & {});

export const type141Schema: EnumSchema<Type141> = s.enumOf<Type141>(Type141);
