import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * An object containing the details of the configuration for repayment term., Contains information
 * about the time period in which your user must repay the total amount of the grant.
 */
export type RepaymentTerm = {
  /** The estimated term for repaying the grant, in days. */
  estimatedDays: number;
  /**
   * The maximum term for repaying the grant, in days. Only applies when `contractType` is **loan**.
   */
  maximumDays?: number;
};

export const repaymentTermSchema: Schema<RepaymentTerm> = s.object<RepaymentTerm>({
  estimatedDays: s.int(),
  maximumDays: s.optional(s.int()),
});
