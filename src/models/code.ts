import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Code = {
  Pending: "Pending",
  Active: "Active",
  Repaid: "Repaid",
  WrittenOff: "WrittenOff",
  Failed: "Failed",
  Revoked: "Revoked",
  Requested: "Requested",
  Reviewing: "Reviewing",
  Approved: "Approved",
  Rejected: "Rejected",
  Cancelled: "Cancelled",
} as const;
export type Code = (typeof Code)[keyof typeof Code] | (string & {});

export const codeSchema: EnumSchema<Code> = s.enumOf<Code>(Code);
