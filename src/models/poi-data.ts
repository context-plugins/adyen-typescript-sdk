import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transactionIdType2Schema, type TransactionIdType2 } from "./transaction-id-type2.js";

/**
 * Data related to the POI System. In the Message Response, identification of the POI transaction.
 */
export type PoiData = {
  /** Unique identification of a POI transaction for a POI. */
  poiTransactionId: TransactionIdType2;
  /** Identification of the reconciliation period between Sale and POI. If Result is Success. */
  poiReconciliationId?: number;
};

export const poiDataSchema: Schema<PoiData> = s.object<PoiData>({
  poiTransactionId: transactionIdType2Schema,
  poiReconciliationId: s.optional(s.int()),
  _keysMap: {
    poiTransactionId: "POITransactionID",
    poiReconciliationId: "POIReconciliationID",
  },
});
