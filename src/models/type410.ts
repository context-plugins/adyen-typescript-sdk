import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of phone number. Possible values: **Landline**, **Mobile**. */
export const Type410 = {
  Landline: "landline",
  Mobile: "mobile",
} as const;
export type Type410 = (typeof Type410)[keyof typeof Type410] | (string & {});

export const type410Schema: EnumSchema<Type410> = s.enumOf<Type410>(Type410);
