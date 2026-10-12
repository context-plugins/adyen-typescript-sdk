import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transactionIdType2Schema, type TransactionIdType2 } from "./transaction-id-type2.js";

/** Data related to the POI System. */
export type PoiData1 = {
  /** Unique identification of a POI transaction for a POI. */
  poiTransactionId: TransactionIdType2;
  /** Identification of the reconciliation period between Sale and POI. If Result is Success. */
  poiReconciliationId?: number;
};

export const poiData1Schema: Schema<PoiData1> = s.object<PoiData1>({
  poiTransactionId: transactionIdType2Schema,
  poiReconciliationId: s.optional(s.int()),
  _keysMap: {
    poiTransactionId: "POITransactionID",
    poiReconciliationId: "POIReconciliationID",
  },
});
