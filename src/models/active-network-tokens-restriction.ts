import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ActiveNetworkTokensRestriction = {
  operation: string;
  value?: number;
};

export const activeNetworkTokensRestrictionSchema: Schema<ActiveNetworkTokensRestriction> =
  s.object<ActiveNetworkTokensRestriction>({
    operation: s.string(),
    value: s.optional(s.number()),
  });
