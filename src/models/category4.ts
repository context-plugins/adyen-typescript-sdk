import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Category4 = {
  Bank: "bank",
  Card: "card",
  Internal: "internal",
  IssuedCard: "issuedCard",
  PlatformPayment: "platformPayment",
  TopUp: "topUp",
} as const;
export type Category4 = (typeof Category4)[keyof typeof Category4] | (string & {});

export const category4Schema: EnumSchema<Category4> = s.enumOf<Category4>(Category4);
