import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StoreSplitConfiguration = {
  balanceAccountId?: string;
  splitConfigurationId?: string;
};

export const storeSplitConfigurationSchema: Schema<StoreSplitConfiguration> =
  s.object<StoreSplitConfiguration>({
    balanceAccountId: s.optional(s.string()),
    splitConfigurationId: s.optional(s.string()),
  });
