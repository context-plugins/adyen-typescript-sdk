import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WalletProviderDeviceScore2 = {
  operation: string;
  value?: number;
};

export const walletProviderDeviceScore2Schema: Schema<WalletProviderDeviceScore2> =
  s.object<WalletProviderDeviceScore2>({
    operation: s.string(),
    value: s.optional(s.number()),
  });
