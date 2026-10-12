import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Expiry month for the test card range.
 *
 * Allowed values:
 * * JANUARY
 * * FEBRUARY
 * * MARCH
 * * APRIL
 * * MAY
 * * JUNE
 * * JULY
 * * AUGUST
 * * SEPTEMBER
 * * OCTOBER
 * * NOVEMBER
 * * DECEMBER
 */
export const ExpiryMonth = {
  April: "APRIL",
  August: "AUGUST",
  December: "DECEMBER",
  February: "FEBRUARY",
  January: "JANUARY",
  July: "JULY",
  June: "JUNE",
  March: "MARCH",
  May: "MAY",
  November: "NOVEMBER",
  October: "OCTOBER",
  September: "SEPTEMBER",
} as const;
export type ExpiryMonth = (typeof ExpiryMonth)[keyof typeof ExpiryMonth] | (string & {});

export const expiryMonthSchema: EnumSchema<ExpiryMonth> = s.enumOf<ExpiryMonth>(ExpiryMonth);
