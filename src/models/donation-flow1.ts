import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The interaction flow for in-person donations. Possible values:
 *
 * - **oneStep**: The shopper presents their payment method for the payment and the donation in one
 *   go, after the donation.
 *
 * - **twoStep**: The shopper presents their payment method twice: after the payment and after the
 *   donation.
 */
export const DonationFlow1 = {
  OneStep: "oneStep",
  TwoStep: "twoStep",
} as const;
export type DonationFlow1 = (typeof DonationFlow1)[keyof typeof DonationFlow1] | (string & {});

export const donationFlow1Schema: EnumSchema<DonationFlow1> = s.enumOf<DonationFlow1>(DonationFlow1);
