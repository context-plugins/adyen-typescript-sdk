import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ActiveNetworkTokensRestriction = {
  /** Defines how the condition must be evaluated. */
  operation: string;
  /** The number of tokens. */
  value?: number;
};

export const activeNetworkTokensRestrictionSchema: Schema<ActiveNetworkTokensRestriction> =
  s.object<ActiveNetworkTokensRestriction>({
    operation: s.string(),
    value: s.optional(s.int()),
  });
