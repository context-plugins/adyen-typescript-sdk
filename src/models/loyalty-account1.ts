import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyAccountId2Schema, type LoyaltyAccountId2 } from "./loyalty-account-id2.js";

export type LoyaltyAccount1 = {
  loyaltyAccountId: LoyaltyAccountId2;
  loyaltyBrand?: string;
};

export const loyaltyAccount1Schema: Schema<LoyaltyAccount1> = s.object<LoyaltyAccount1>({
  loyaltyAccountId: loyaltyAccountId2Schema,
  loyaltyBrand: s.optional(s.string()),
  _keysMap: {
    loyaltyAccountId: "LoyaltyAccountID",
    loyaltyBrand: "LoyaltyBrand",
  },
});
