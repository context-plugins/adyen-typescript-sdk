import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type610 = {
  ReleaseUpdate: "ReleaseUpdate",
} as const;
export type Type610 = (typeof Type610)[keyof typeof Type610] | (string & {});

export const type610Schema: EnumSchema<Type610> = s.enumOf<Type610>(Type610);
