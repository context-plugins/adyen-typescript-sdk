import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Determines how long it takes for the funds to reach the bank account. Adyen pays out based on the
 * [payout frequency](https://docs.adyen.com/account/getting-paid#payout-frequency). Depending on
 * the currencies and banks involved in transferring the money, it may take up to three days for the
 * payout funds to arrive in the bank account.
 *
 * Possible values:
 * * **first**: same day.
 * * **urgent**: the next day.
 * * **normal**: between 1 and 3 days.
 */
export const Priority = {
  First: "first",
  Normal: "normal",
  Urgent: "urgent",
} as const;
export type Priority = (typeof Priority)[keyof typeof Priority] | (string & {});

export const prioritySchema: EnumSchema<Priority> = s.enumOf<Priority>(Priority);
