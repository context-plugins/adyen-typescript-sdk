import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Checks the wallet account score.
 *
 * Supported operations: **equals**, **notEquals**, **greaterThanOrEqualTo**, **greaterThan**,
 * **lessThanOrEqualTo**, **lessThan**.
 */
export type WalletProviderAccountScoreRestriction2 = {
  /** Defines how the condition must be evaluated. */
  operation: string;
  value?: number;
};

export const walletProviderAccountScoreRestriction2Schema: Schema<WalletProviderAccountScoreRestriction2> =
  s.object<WalletProviderAccountScoreRestriction2>({
    operation: s.string(),
    value: s.optional(s.int()),
  });
