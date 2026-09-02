import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status71 = {
  Created: "created",
  Delivered: "delivered",
  NotApplicable: "notApplicable",
  Processing: "processing",
  Produced: "produced",
  Rejected: "rejected",
  Shipped: "shipped",
  Unknown: "unknown",
} as const;
export type Status71 = (typeof Status71)[keyof typeof Status71] | (string & {});

export const status71Schema: EnumSchema<Status71> = s.enumOf<Status71>(Status71);
