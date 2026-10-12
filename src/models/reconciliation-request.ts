import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reconciliationType1Schema, type ReconciliationType1 } from "./reconciliation-type1.js";

/**
 * Content of the Reconciliation Request message. It conveys Information related to the
 * Reconciliation requested by the Sale System.
 */
export type ReconciliationRequest = {
  /**
   * Type of Reconciliation requested by the Sale to the POI. Possible values:
   * * **AcquirerReconciliation**
   * * **AcquirerSynchronisation**
   * * **PreviousReconciliation**
   * * **SaleReconciliation**
   */
  reconciliationType: ReconciliationType1;
  /**
   * Identification of the Acquirer. Could be present only if ReconciliationType is
   * AcquirerReconciliation or AcquirerSynchronisation.
   */
  acquirerId?: number[];
  /**
   * Identification of the reconciliation period between Sale and POI. Absent if ReconciliationType
   * is not PreviousReconciliation.
   */
  poiReconciliationId?: number;
};

export const reconciliationRequestSchema: Schema<ReconciliationRequest> = s.object<ReconciliationRequest>({
  reconciliationType: reconciliationType1Schema,
  acquirerId: s.optional(s.array(s.int())),
  poiReconciliationId: s.optional(s.int()),
  _keysMap: {
    reconciliationType: "ReconciliationType",
    acquirerId: "AcquirerID",
    poiReconciliationId: "POIReconciliationID",
  },
});
