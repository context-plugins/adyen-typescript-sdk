import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status6 = {
  Active: "active",
  Inactive: "inactive",
} as const;
export type Status6 = (typeof Status6)[keyof typeof Status6] | (string & {});

export const status6Schema: EnumSchema<Status6> = s.enumOf<Status6>(Status6);
