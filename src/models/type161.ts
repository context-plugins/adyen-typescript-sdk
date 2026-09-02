import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type161 = {
  Pull: "pull",
  Push: "push",
} as const;
export type Type161 = (typeof Type161)[keyof typeof Type161] | (string & {});

export const type161Schema: EnumSchema<Type161> = s.enumOf<Type161>(Type161);
