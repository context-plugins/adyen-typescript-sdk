import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ActiveNetworkTokensRestriction1 = {
  operation: string;
  value?: number;
};

export const activeNetworkTokensRestriction1Schema: Schema<ActiveNetworkTokensRestriction1> =
  s.object<ActiveNetworkTokensRestriction1>({
    operation: s.string(),
    value: s.optional(s.number()),
  });
