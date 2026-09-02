import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DonationAmount1 = {
  amounts: number[];
  currencyCode: string;
};

export const donationAmount1Schema: Schema<DonationAmount1> = s.object<DonationAmount1>({
  amounts: s.array(s.number()),
  currencyCode: s.string(),
});
