import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The interaction flow for in-person donations: complete payment for the purchase and the donation
 * in one go, or separately.
 */
export const DonationFlow4 = {
  OneStep: "oneStep",
  TwoStep: "twoStep",
} as const;
export type DonationFlow4 = (typeof DonationFlow4)[keyof typeof DonationFlow4] | (string & {});

export const donationFlow4Schema: EnumSchema<DonationFlow4> = s.enumOf<DonationFlow4>(DonationFlow4);
