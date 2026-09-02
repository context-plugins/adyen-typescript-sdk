import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { response11Schema, type Response11 } from "./response11.js";
import { transactionTotalsSchema, type TransactionTotals } from "./transaction-totals.js";

export type GetTotalsResponse2 = {
  response: Response11;
  poiReconciliationId: number;
  transactionTotals?: TransactionTotals[];
};

export const getTotalsResponse2Schema: Schema<GetTotalsResponse2> = s.object<GetTotalsResponse2>({
  response: response11Schema,
  poiReconciliationId: s.number(),
  transactionTotals: s.optional(s.array(s.lazy(() => transactionTotalsSchema))),
  _keysMap: {
    response: "Response",
    poiReconciliationId: "POIReconciliationID",
    transactionTotals: "TransactionTotals",
  },
});
