import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transactionIdType6Schema, type TransactionIdType6 } from "./transaction-id-type6.js";

/** Data related to the response from the payment Acquirer. */
export type PaymentAcquirerData = {
  /**
   * Identification of the Acquirer. Identification of the Acquirer when the POI System is
   * multi-acquirer.
   */
  acquirerId?: number;
  /** Identification of the Merchant for the Acquirer. */
  merchantId: string;
  /** Identification of the POI for the payment Acquirer. */
  acquirerPoiid: string;
  /** Identification of the Transaction for the Acquirer. If provided by the Acquirer. */
  acquirerTransactionId?: TransactionIdType6;
  /** Code assigned to a transaction approval by the Acquirer. If available. */
  approvalCode?: string;
  /**
   * Identifier of a reconciliation period with a payment or loyalty host. Allows the assignment of
   * a transaction to the Acquirer reconciliation (or batch).
   */
  hostReconciliationId?: string;
};

export const paymentAcquirerDataSchema: Schema<PaymentAcquirerData> = s.object<PaymentAcquirerData>({
  acquirerId: s.optional(s.int()),
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
