import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type272 = {
  UkFps: "ukFps",
} as const;
export type Type272 = (typeof Type272)[keyof typeof Type272] | (string & {});

export const type272Schema: EnumSchema<Type272> = s.enumOf<Type272>(Type272);
