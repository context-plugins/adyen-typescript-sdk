import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type38 = {
  EcontextSevenEleven: "econtext_seven_eleven",
  EcontextOnline: "econtext_online",
  Econtext: "econtext",
  EcontextStores: "econtext_stores",
  EcontextAtm: "econtext_atm",
} as const;
export type Type38 = (typeof Type38)[keyof typeof Type38] | (string & {});

export const type38Schema: EnumSchema<Type38> = s.enumOf<Type38>(Type38);
