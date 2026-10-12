import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * **dbarai**
 */
export const Type20 = {
  Dbarai: "dbarai",
} as const;
export type Type20 = (typeof Type20)[keyof typeof Type20] | (string & {});

export const type20Schema: EnumSchema<Type20> = s.enumOf<Type20>(Type20);
