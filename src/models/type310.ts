import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type310 = {
  InstallAndroidApp: "InstallAndroidApp",
} as const;
export type Type310 = (typeof Type310)[keyof typeof Type310] | (string & {});

export const type310Schema: EnumSchema<Type310> = s.enumOf<Type310>(Type310);
