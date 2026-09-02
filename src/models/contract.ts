import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Contract = {
  Oneclick: "ONECLICK",
  OneclickRecurring: "ONECLICK,RECURRING",
  Recurring: "RECURRING",
  Payout: "PAYOUT",
  External: "EXTERNAL",
} as const;
export type Contract = (typeof Contract)[keyof typeof Contract] | (string & {});

export const contractSchema: EnumSchema<Contract> = s.enumOf<Contract>(Contract);
