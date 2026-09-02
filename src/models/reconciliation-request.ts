import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reconciliationType1Schema, type ReconciliationType1 } from "./reconciliation-type1.js";

export type ReconciliationRequest = {
  reconciliationType: ReconciliationType1;
  acquirerId?: number[];
  poiReconciliationId?: number;
};

export const reconciliationRequestSchema: Schema<ReconciliationRequest> = s.object<ReconciliationRequest>({
  reconciliationType: reconciliationType1Schema,
  acquirerId: s.optional(s.array(s.number())),
  poiReconciliationId: s.optional(s.number()),
  _keysMap: {
    reconciliationType: "ReconciliationType",
    acquirerId: "AcquirerID",
    poiReconciliationId: "POIReconciliationID",
  },
});
