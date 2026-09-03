import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type62 = {
  Daily: "daily",
  Weekly: "weekly",
  Monthly: "monthly",
  Balance: "balance",
  Cron: "cron",
} as const;
export type Type62 = (typeof Type62)[keyof typeof Type62] | (string & {});

export const type62Schema: EnumSchema<Type62> = s.enumOf<Type62>(Type62);
