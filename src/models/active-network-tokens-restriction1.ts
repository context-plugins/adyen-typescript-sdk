import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The total number of tokens that a card can have across different kinds of digital wallets on the
 * user's phones, watches, or other wearables.
 *
 * Supported operations: **equals**, **notEquals**, **greaterThanOrEqualTo**, **greaterThan**,
 * **lessThanOrEqualTo**, **lessThan**.
 */
export type ActiveNetworkTokensRestriction1 = {
  /** Defines how the condition must be evaluated. */
  operation: string;
  /** The number of tokens. */
  value?: number;
};

export const activeNetworkTokensRestriction1Schema: Schema<ActiveNetworkTokensRestriction1> =
  s.object<ActiveNetworkTokensRestriction1>({
    operation: s.string(),
    value: s.optional(s.int()),
  });
