import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StoreSplitConfiguration1 = {
  balanceAccountId?: string;
  splitConfigurationId?: string;
};

export const storeSplitConfiguration1Schema: Schema<StoreSplitConfiguration1> =
  s.object<StoreSplitConfiguration1>({
    balanceAccountId: s.optional(s.string()),
    splitConfigurationId: s.optional(s.string()),
  });
