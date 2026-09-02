import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WalletProviderDeviceScore = {
  operation: string;
  value?: number;
};

export const walletProviderDeviceScoreSchema: Schema<WalletProviderDeviceScore> =
  s.object<WalletProviderDeviceScore>({
    operation: s.string(),
    value: s.optional(s.number()),
  });
