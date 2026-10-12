import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Default payment method details. Common for scheme payment methods, and for simple payment method
 * details.
 */
export const Type14 = {
  Bcmc: "bcmc",
  Scheme: "scheme",
  NetworkToken: "networkToken",
  Giftcard: "giftcard",
  Card: "card",
  Clicktopay: "clicktopay",
} as const;
export type Type14 = (typeof Type14)[keyof typeof Type14] | (string & {});

export const type14Schema: EnumSchema<Type14> = s.enumOf<Type14>(Type14);
