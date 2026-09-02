import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type232 = {
  PlatformPayment: "platformPayment",
} as const;
export type Type232 = (typeof Type232)[keyof typeof Type232] | (string & {});

export const type232Schema: EnumSchema<Type232> = s.enumOf<Type232>(Type232);
