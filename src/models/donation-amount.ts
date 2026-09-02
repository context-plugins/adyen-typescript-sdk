import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DonationAmount = {
  amounts: number[];
  currencyCode: string;
};

export const donationAmountSchema: Schema<DonationAmount> = s.object<DonationAmount>({
  amounts: s.array(s.number()),
  currencyCode: s.string(),
});
