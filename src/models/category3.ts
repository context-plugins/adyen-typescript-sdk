import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Category3 = {
  Bank: "bank",
  Card: "card",
  Internal: "internal",
  IssuedCard: "issuedCard",
  PlatformPayment: "platformPayment",
  TopUp: "topUp",
} as const;
export type Category3 = (typeof Category3)[keyof typeof Category3] | (string & {});

export const category3Schema: EnumSchema<Category3> = s.enumOf<Category3>(Category3);
