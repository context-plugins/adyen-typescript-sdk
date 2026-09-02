import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type251 = {
  NumberAndBic: "numberAndBic",
} as const;
export type Type251 = (typeof Type251)[keyof typeof Type251] | (string & {});

export const type251Schema: EnumSchema<Type251> = s.enumOf<Type251>(Type251);
