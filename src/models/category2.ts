import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Category2 = {
  Bank: "bank",
  Card: "card",
  Grants: "grants",
  Interest: "interest",
  Internal: "internal",
  IssuedCard: "issuedCard",
  Migration: "migration",
  PlatformPayment: "platformPayment",
  TopUp: "topUp",
  Upgrade: "upgrade",
} as const;
export type Category2 = (typeof Category2)[keyof typeof Category2] | (string & {});

export const category2Schema: EnumSchema<Category2> = s.enumOf<Category2>(Category2);
