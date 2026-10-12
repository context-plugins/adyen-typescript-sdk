import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transactionIdType4Schema, type TransactionIdType4 } from "./transaction-id-type4.js";
import { transactionIdType5Schema, type TransactionIdType5 } from "./transaction-id-type5.js";

/** Identification of a previous POI transaction. */
export type OriginalPoiTransaction2 = {
  /** Identification of a Sale System for the NEXO SaletoPOI protocol. */
  saleId?: string;
  /**
   * Identification of a payment terminal for the NEXO SaletoPOI protocol. If original transaction
   * is coming from another POI.
   */
  poiid?: string;
  /**
   * Unique identification of a POI transaction for a POI. Absent if SaleReferenceID is sufficient
   * to identify the transaction.
   */
  poiTransactionId?: TransactionIdType4;
  /** Indicates if the card data has to be retrieved from a previous transaction. @default true */
  reuseCardDataFlag?: boolean;
  /** Code assigned to a transaction approval by the Acquirer. If referral. */
  approvalCode?: string;
  /** Identification of the Acquirer. Restrict to the Acquirer if present. */
  acquirerId?: number;
  /** Value of an amount. */
  amountValue?: number;
  /**
   * Identification of the transaction by the host in charge of the stored value transaction. If
   * POITransactionID not present.
   */
  hostTransactionId?: TransactionIdType5;
};

export const originalPoiTransaction2Schema: Schema<OriginalPoiTransaction2> =
  s.object<OriginalPoiTransaction2>({
    saleId: s.optional(s.string()),
    poiid: s.optional(s.string()),
    poiTransactionId: s.optional(s.lazy(() => transactionIdType4Schema)),
    reuseCardDataFlag: s.defaulted(s.boolean(), true),
    approvalCode: s.optional(s.string()),
    acquirerId: s.optional(s.int()),
    amountValue: s.optional(s.float64()),
    hostTransactionId: s.optional(s.lazy(() => transactionIdType5Schema)),
    _keysMap: {
      saleId: "SaleID",
      poiid: "POIID",
      poiTransactionId: "POITransactionID",
      reuseCardDataFlag: "ReuseCardDataFlag",
      approvalCode: "ApprovalCode",
      acquirerId: "AcquirerID",
      amountValue: "AmountValue",
      hostTransactionId: "HostTransactionID",
    },
  });
