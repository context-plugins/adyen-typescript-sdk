import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyAccountIdSchema, type LoyaltyAccountId } from "./loyalty-account-id.js";
import { transactionIdTypeSchema, type TransactionIdType } from "./transaction-id-type.js";

export type LoyaltyAccountReq = {
  /** Identification of a transaction for the Sale System or the POI System. */
  cardAcquisitionReference?: TransactionIdType;
  /**
   * Identification of a Loyalty account. In the Payment Request message, it allows to identify the
   * loyalty account by the Sale Terminal instead of the POI Terminal (e.g. because the account
   * identification is a bar-code read by the Cashier on a scanner device).
   */
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
