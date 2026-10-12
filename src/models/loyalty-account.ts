import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyAccountId2Schema, type LoyaltyAccountId2 } from "./loyalty-account-id2.js";

/**
 * This data structure conveys the identification of the account and the associated loyalty brand.
 * Data related to a loyalty account processed in the transaction.
 */
export type LoyaltyAccount = {
  /** Identification of a Loyalty account. */
  loyaltyAccountId: LoyaltyAccountId2;
  /** Identification of a Loyalty brand. If a card is analysed. */
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
