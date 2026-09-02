import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reconciliationType1Schema, type ReconciliationType1 } from "./reconciliation-type1.js";

export type ReconciliationRequest2 = {
  reconciliationType: ReconciliationType1;
  acquirerId?: number[];
  poiReconciliationId?: number;
};

export const reconciliationRequest2Schema: Schema<ReconciliationRequest2> = s.object<ReconciliationRequest2>({
  reconciliationType: reconciliationType1Schema,
  acquirerId: s.optional(s.array(s.number())),
  poiReconciliationId: s.optional(s.number()),
  _keysMap: {
    reconciliationType: "ReconciliationType",
    acquirerId: "AcquirerID",
    poiReconciliationId: "POIReconciliationID",
  },
});
