import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ReconciliationType = {
  SaleReconciliation: "SaleReconciliation",
  AcquirerSynchronisation: "AcquirerSynchronisation",
  AcquirerReconciliation: "AcquirerReconciliation",
  PreviousReconciliation: "PreviousReconciliation",
} as const;
export type ReconciliationType = (typeof ReconciliationType)[keyof typeof ReconciliationType] | (string & {});

export const reconciliationTypeSchema: EnumSchema<ReconciliationType> =
  s.enumOf<ReconciliationType>(ReconciliationType);
