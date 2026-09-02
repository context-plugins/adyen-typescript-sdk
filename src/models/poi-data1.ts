import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transactionIdType2Schema, type TransactionIdType2 } from "./transaction-id-type2.js";

export type PoiData1 = {
  poiTransactionId: TransactionIdType2;
  poiReconciliationId?: number;
};

export const poiData1Schema: Schema<PoiData1> = s.object<PoiData1>({
  poiTransactionId: transactionIdType2Schema,
  poiReconciliationId: s.optional(s.number()),
  _keysMap: {
    poiTransactionId: "POITransactionID",
    poiReconciliationId: "POIReconciliationID",
  },
});
