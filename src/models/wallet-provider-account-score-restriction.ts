import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WalletProviderAccountScoreRestriction = {
  /** Defines how the condition must be evaluated. */
  operation: string;
  value?: number;
};

export const walletProviderAccountScoreRestrictionSchema: Schema<WalletProviderAccountScoreRestriction> =
  s.object<WalletProviderAccountScoreRestriction>({
    operation: s.string(),
    value: s.optional(s.int()),
  });
