import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DonationAmountUpdate = {
  amounts?: number[];
  currencyCode?: string;
};

export const donationAmountUpdateSchema: Schema<DonationAmountUpdate> = s.object<DonationAmountUpdate>({
  amounts: s.optional(s.array(s.number())),
  currencyCode: s.optional(s.string()),
});
