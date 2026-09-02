import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transactionIdType2Schema, type TransactionIdType2 } from "./transaction-id-type2.js";

export type PoiData4 = {
  poiTransactionId: TransactionIdType2;
  poiReconciliationId?: number;
};

export const poiData4Schema: Schema<PoiData4> = s.object<PoiData4>({
  poiTransactionId: transactionIdType2Schema,
  poiReconciliationId: s.optional(s.number()),
  _keysMap: {
    poiTransactionId: "POITransactionID",
    poiReconciliationId: "POIReconciliationID",
  },
});
