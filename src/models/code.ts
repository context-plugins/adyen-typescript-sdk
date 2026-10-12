import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The code for the status of the grant. Possible values:
 * - **Pending**
 * - **Active**
 * - **Repaid**
 * - **WrittenOff**
 * - **Failed**
 * - **Revoked**
 * - **Requested**
 * - **Reviewing**
 * - **Approved**
 * - **Rejected**
 * - **Cancelled**
 */
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
