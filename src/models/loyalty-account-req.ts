import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyAccountIdSchema, type LoyaltyAccountId } from "./loyalty-account-id.js";
import { transactionIdTypeSchema, type TransactionIdType } from "./transaction-id-type.js";

export type LoyaltyAccountReq = {
  cardAcquisitionReference?: TransactionIdType;
  loyaltyAccountId?: LoyaltyAccountId;
};

export const loyaltyAccountReqSchema: Schema<LoyaltyAccountReq> = s.object<LoyaltyAccountReq>({
  cardAcquisitionReference: s.optional(s.lazy(() => transactionIdTypeSchema)),
  loyaltyAccountId: s.optional(s.lazy(() => loyaltyAccountIdSchema)),
  _keysMap: {
    cardAcquisitionReference: "CardAcquisitionReference",
    loyaltyAccountId: "LoyaltyAccountID",
  },
});
