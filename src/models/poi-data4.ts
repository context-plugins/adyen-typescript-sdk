import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transactionIdType2Schema, type TransactionIdType2 } from "./transaction-id-type2.js";

/** Data related to the POI System. If Result is Success. */
export type PoiData4 = {
  /** Unique identification of a POI transaction for a POI. */
  poiTransactionId: TransactionIdType2;
  /** Identification of the reconciliation period between Sale and POI. If Result is Success. */
  poiReconciliationId?: number;
};

export const poiData4Schema: Schema<PoiData4> = s.object<PoiData4>({
  poiTransactionId: transactionIdType2Schema,
  poiReconciliationId: s.optional(s.int()),
  _keysMap: {
    poiTransactionId: "POITransactionID",
    poiReconciliationId: "POIReconciliationID",
  },
});
