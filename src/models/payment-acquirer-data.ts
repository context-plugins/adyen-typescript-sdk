import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transactionIdType6Schema, type TransactionIdType6 } from "./transaction-id-type6.js";

export type PaymentAcquirerData = {
  acquirerId?: number;
  merchantId: string;
  acquirerPoiid: string;
  acquirerTransactionId?: TransactionIdType6;
  approvalCode?: string;
  hostReconciliationId?: string;
};

export const paymentAcquirerDataSchema: Schema<PaymentAcquirerData> = s.object<PaymentAcquirerData>({
  acquirerId: s.optional(s.number()),
  merchantId: s.string(),
  acquirerPoiid: s.string(),
  acquirerTransactionId: s.optional(s.lazy(() => transactionIdType6Schema)),
  approvalCode: s.optional(s.string()),
  hostReconciliationId: s.optional(s.string()),
  _keysMap: {
    acquirerId: "AcquirerID",
    merchantId: "MerchantID",
    acquirerPoiid: "AcquirerPOIID",
    acquirerTransactionId: "AcquirerTransactionID",
    approvalCode: "ApprovalCode",
    hostReconciliationId: "HostReconciliationID",
  },
});
