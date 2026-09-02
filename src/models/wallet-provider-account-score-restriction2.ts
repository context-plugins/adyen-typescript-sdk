import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WalletProviderAccountScoreRestriction2 = {
  operation: string;
  value?: number;
};

export const walletProviderAccountScoreRestriction2Schema: Schema<WalletProviderAccountScoreRestriction2> =
  s.object<WalletProviderAccountScoreRestriction2>({
    operation: s.string(),
    value: s.optional(s.number()),
  });
