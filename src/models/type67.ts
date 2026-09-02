import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type67 = {
  Sepadirectdebit: "sepadirectdebit",
  SepadirectdebitAmazonpay: "sepadirectdebit_amazonpay",
} as const;
export type Type67 = (typeof Type67)[keyof typeof Type67] | (string & {});

export const type67Schema: EnumSchema<Type67> = s.enumOf<Type67>(Type67);
