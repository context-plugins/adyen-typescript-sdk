import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyAccountId2Schema, type LoyaltyAccountId2 } from "./loyalty-account-id2.js";

/** Data related to a loyalty account processed in the transaction. */
export type LoyaltyAccount1 = {
  /** Identification of a Loyalty account. */
  loyaltyAccountId: LoyaltyAccountId2;
  /** Identification of a Loyalty brand. If a card is analysed. */
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
