import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transactionIdTypeSchema, type TransactionIdType } from "./transaction-id-type.js";

export type LoyaltyAcquirerData = {
  /** Identification of the loyalty Acquirer. */
  loyaltyAcquirerId?: string;
  /**
   * Code assigned to a transaction approval by the Acquirer. Could be an identifier of the approved
   * transaction for the Acquirer. This data element is conditional for the Loyalty Acquirers. Used
   * in the PaymentRequest request for a referral.
   */
  approvalCode?: string;
  /** Identification of a transaction for the Sale System or the POI System. */
  loyaltyTransactionId?: TransactionIdType;
  /**
   * Identifier of a reconciliation period with a payment or loyalty host. Allows the assignment of
   * a transaction to the Acquirer reconciliation (or batch).
   */
  hostReconciliationId?: string;
};

export const loyaltyAcquirerDataSchema: Schema<LoyaltyAcquirerData> = s.object<LoyaltyAcquirerData>({
  loyaltyAcquirerId: s.optional(s.string()),
  approvalCode: s.optional(s.string()),
  loyaltyTransactionId: s.optional(s.lazy(() => transactionIdTypeSchema)),
  hostReconciliationId: s.optional(s.string()),
  _keysMap: {
    loyaltyAcquirerId: "LoyaltyAcquirerID",
    approvalCode: "ApprovalCode",
    loyaltyTransactionId: "LoyaltyTransactionID",
    hostReconciliationId: "HostReconciliationID",
  },
});
