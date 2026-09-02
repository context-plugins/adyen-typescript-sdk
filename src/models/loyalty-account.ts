import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyAccountId2Schema, type LoyaltyAccountId2 } from "./loyalty-account-id2.js";

export type LoyaltyAccount = {
  loyaltyAccountId: LoyaltyAccountId2;
  loyaltyBrand?: string;
};

export const loyaltyAccountSchema: Schema<LoyaltyAccount> = s.object<LoyaltyAccount>({
  loyaltyAccountId: loyaltyAccountId2Schema,
  loyaltyBrand: s.optional(s.string()),
  _keysMap: {
    loyaltyAccountId: "LoyaltyAccountID",
    loyaltyBrand: "LoyaltyBrand",
  },
});
