import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DonationFlow = {
  OneStep: "oneStep",
  TwoStep: "twoStep",
} as const;
export type DonationFlow = (typeof DonationFlow)[keyof typeof DonationFlow] | (string & {});

export const donationFlowSchema: EnumSchema<DonationFlow> = s.enumOf<DonationFlow>(DonationFlow);
