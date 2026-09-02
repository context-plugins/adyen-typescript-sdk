import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reconciliationType1Schema, type ReconciliationType1 } from "./reconciliation-type1.js";
import { response11Schema, type Response11 } from "./response11.js";
import { transactionTotalsSchema, type TransactionTotals } from "./transaction-totals.js";

export type ReconciliationResponse2 = {
  response: Response11;
  reconciliationType: ReconciliationType1;
  poiReconciliationId?: number;
  transactionTotals?: TransactionTotals[];
};

export const reconciliationResponse2Schema: Schema<ReconciliationResponse2> =
  s.object<ReconciliationResponse2>({
    response: response11Schema,
    reconciliationType: reconciliationType1Schema,
    poiReconciliationId: s.optional(s.number()),
    transactionTotals: s.optional(s.array(s.lazy(() => transactionTotalsSchema))),
    _keysMap: {
      response: "Response",
      reconciliationType: "ReconciliationType",
      poiReconciliationId: "POIReconciliationID",
      transactionTotals: "TransactionTotals",
    },
  });
