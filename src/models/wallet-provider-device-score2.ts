import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Wallet Provider Device Score and the operation.
 *
 * Supported operations: **equals**, **notEquals**, **greaterThanOrEqualTo**, **greaterThan**,
 * **lessThanOrEqualTo**, **lessThan**.
 */
export type WalletProviderDeviceScore2 = {
  /** Defines how the condition must be evaluated. */
  operation: string;
  value?: number;
};

export const walletProviderDeviceScore2Schema: Schema<WalletProviderDeviceScore2> =
  s.object<WalletProviderDeviceScore2>({
    operation: s.string(),
    value: s.optional(s.int()),
  });
