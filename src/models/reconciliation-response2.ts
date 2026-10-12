import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reconciliationType1Schema, type ReconciliationType1 } from "./reconciliation-type1.js";
import { response11Schema, type Response11 } from "./response11.js";
import { transactionTotalsSchema, type TransactionTotals } from "./transaction-totals.js";

/** Content of the Reconciliation Response message. */
export type ReconciliationResponse2 = {
  /** Result of a message request processing. */
  response: Response11;
  /**
   * Type of Reconciliation requested by the Sale to the POI. Possible values:
   * * **AcquirerReconciliation**
   * * **AcquirerSynchronisation**
   * * **PreviousReconciliation**
   * * **SaleReconciliation**
   */
  reconciliationType: ReconciliationType1;
  /**
   * Identification of the reconciliation period between Sale and POI. Absent if ReconciliationType
   * is `AcquirerReconciliation`.
   */
  poiReconciliationId?: number;
  /** Result of the Sale to POI Reconciliation processing. If `Response.Result` is Success. */
  transactionTotals?: TransactionTotals[];
};

export const reconciliationResponse2Schema: Schema<ReconciliationResponse2> =
  s.object<ReconciliationResponse2>({
    response: response11Schema,
    reconciliationType: reconciliationType1Schema,
    poiReconciliationId: s.optional(s.int()),
    transactionTotals: s.optional(s.array(s.lazy(() => transactionTotalsSchema))),
    _keysMap: {
      response: "Response",
      reconciliationType: "ReconciliationType",
      poiReconciliationId: "POIReconciliationID",
      transactionTotals: "TransactionTotals",
    },
  });
