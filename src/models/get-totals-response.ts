import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { response11Schema, type Response11 } from "./response11.js";
import { transactionTotalsSchema, type TransactionTotals } from "./transaction-totals.js";

/**
 * Content of the Reconciliation Response message. It conveys Information related to the
 * Reconciliation transaction processed by the POI System.
 */
export type GetTotalsResponse = {
  /** Result of a message request processing. */
  response: Response11;
  /** Identification of the reconciliation period between Sale and POI. */
  poiReconciliationId: number;
  /** Result of the Sale to POI Reconciliation processing. If `Response.Result` is Success. */
  transactionTotals?: TransactionTotals[];
};

export const getTotalsResponseSchema: Schema<GetTotalsResponse> = s.object<GetTotalsResponse>({
  response: response11Schema,
  poiReconciliationId: s.int(),
  transactionTotals: s.optional(s.array(s.lazy(() => transactionTotalsSchema))),
  _keysMap: {
    response: "Response",
    poiReconciliationId: "POIReconciliationID",
    transactionTotals: "TransactionTotals",
  },
});
