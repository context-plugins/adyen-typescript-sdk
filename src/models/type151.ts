import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type151 = {
  Daily: "daily",
  Weekly: "weekly",
  Monthly: "monthly",
  Balance: "balance",
  Cron: "cron",
} as const;
export type Type151 = (typeof Type151)[keyof typeof Type151] | (string & {});

export const type151Schema: EnumSchema<Type151> = s.enumOf<Type151>(Type151);
