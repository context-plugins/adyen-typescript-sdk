import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transactionIdTypeSchema, type TransactionIdType } from "./transaction-id-type.js";

export type LoyaltyAcquirerData1 = {
  loyaltyAcquirerId?: string;
  approvalCode?: string;
  loyaltyTransactionId?: TransactionIdType;
  hostReconciliationId?: string;
};

export const loyaltyAcquirerData1Schema: Schema<LoyaltyAcquirerData1> = s.object<LoyaltyAcquirerData1>({
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
