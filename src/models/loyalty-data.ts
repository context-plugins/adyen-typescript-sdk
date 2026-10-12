import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyAccountId1Schema, type LoyaltyAccountId1 } from "./loyalty-account-id1.js";
import { transactionIdType3Schema, type TransactionIdType3 } from "./transaction-id-type3.js";

/**
 * In the Payment, Loyalty or Balance Inquiry Request message, it allows the Sale Terminal to send
 * the identification of the loyalty account or an awarded amount or an amount to redeem to the
 * loyalty account. Data related to a Loyalty program or account.
 */
export type LoyaltyData = {
  /**
   * Reference to the last CardAcquisition, to use the same card. If the loyalty account ID comes
   * from a previous CardAcquisition.
   */
  cardAcquisitionReference?: TransactionIdType3;
  /**
   * Identification of a Loyalty account. If loyalty identification of the loyalty account is
   * realised by the Sale System.
   */
  loyaltyAccountId?: LoyaltyAccountId1;
};

export const loyaltyDataSchema: Schema<LoyaltyData> = s.object<LoyaltyData>({
  cardAcquisitionReference: s.optional(s.lazy(() => transactionIdType3Schema)),
  loyaltyAccountId: s.optional(s.lazy(() => loyaltyAccountId1Schema)),
  _keysMap: {
    cardAcquisitionReference: "CardAcquisitionReference",
    loyaltyAccountId: "LoyaltyAccountID",
  },
});
