import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * **visacheckout**
 */
export const Type55 = {
  Visacheckout: "visacheckout",
} as const;
export type Type55 = (typeof Type55)[keyof typeof Type55] | (string & {});

export const type55Schema: EnumSchema<Type55> = s.enumOf<Type55>(Type55);
