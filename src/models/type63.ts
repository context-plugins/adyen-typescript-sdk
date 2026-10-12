import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * **platformPayment**
 */
export const Type63 = {
  PlatformPayment: "platformPayment",
} as const;
export type Type63 = (typeof Type63)[keyof typeof Type63] | (string & {});

export const type63Schema: EnumSchema<Type63> = s.enumOf<Type63>(Type63);
