import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status14 = {
  Pending: "Pending",
  Active: "Active",
  Repaid: "Repaid",
  Failed: "Failed",
  WrittenOff: "WrittenOff",
  Revoked: "Revoked",
} as const;
export type Status14 = (typeof Status14)[keyof typeof Status14] | (string & {});

export const status14Schema: EnumSchema<Status14> = s.enumOf<Status14>(Status14);
