import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ReconciliationType1 = {
  SaleReconciliation: "SaleReconciliation",
  AcquirerSynchronisation: "AcquirerSynchronisation",
  AcquirerReconciliation: "AcquirerReconciliation",
  PreviousReconciliation: "PreviousReconciliation",
} as const;
export type ReconciliationType1 =
  | (typeof ReconciliationType1)[keyof typeof ReconciliationType1]
  | (string & {});

export const reconciliationType1Schema: EnumSchema<ReconciliationType1> =
  s.enumOf<ReconciliationType1>(ReconciliationType1);
