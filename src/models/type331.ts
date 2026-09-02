import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type331 = {
  Ios: "ios",
  Android: "android",
  Browser: "browser",
} as const;
export type Type331 = (typeof Type331)[keyof typeof Type331] | (string & {});

export const type331Schema: EnumSchema<Type331> = s.enumOf<Type331>(Type331);
