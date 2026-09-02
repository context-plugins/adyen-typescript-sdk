import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DonationFlow1 = {
  OneStep: "oneStep",
  TwoStep: "twoStep",
} as const;
export type DonationFlow1 = (typeof DonationFlow1)[keyof typeof DonationFlow1] | (string & {});

export const donationFlow1Schema: EnumSchema<DonationFlow1> = s.enumOf<DonationFlow1>(DonationFlow1);
