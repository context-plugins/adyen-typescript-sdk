import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyAccountId1Schema, type LoyaltyAccountId1 } from "./loyalty-account-id1.js";
import { transactionIdType3Schema, type TransactionIdType3 } from "./transaction-id-type3.js";

export type LoyaltyData = {
  cardAcquisitionReference?: TransactionIdType3;
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
