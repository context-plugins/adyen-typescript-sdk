import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type29 = {
  EcontextSevenEleven: "econtext_seven_eleven",
  EcontextOnline: "econtext_online",
  Econtext: "econtext",
  EcontextStores: "econtext_stores",
  EcontextAtm: "econtext_atm",
} as const;
export type Type29 = (typeof Type29)[keyof typeof Type29] | (string & {});

export const type29Schema: EnumSchema<Type29> = s.enumOf<Type29>(Type29);
