import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status131 = {
  Completed: "completed",
  Pending: "pending",
  Unavailable: "unavailable",
} as const;
export type Status131 = (typeof Status131)[keyof typeof Status131] | (string & {});

export const status131Schema: EnumSchema<Status131> = s.enumOf<Status131>(Status131);
