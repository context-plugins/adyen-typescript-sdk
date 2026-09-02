import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status44 = {
  Pending: "pending",
  Failed: "failed",
} as const;
export type Status44 = (typeof Status44)[keyof typeof Status44] | (string & {});

export const status44Schema: EnumSchema<Status44> = s.enumOf<Status44>(Status44);
