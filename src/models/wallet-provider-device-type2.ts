import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { value6Schema, type Value6 } from "./value6.js";

/**
 * Wallet Provider Device Type and the operation.
 *
 * Supported operations: **anyMatch**, **noneMatch**.
 *
 * Supported value inputs:
 * - **MOBILE_PHONE**
 * - **TABLET_OR_EREADER**
 * - **WATCH_OR_WRISTBAND**
 * - **WEARABLE**
 *
 * - **CARD**
 * - **PC**
 * - **OTHER**
 * - **UNKNOWN**
 */
export type WalletProviderDeviceType2 = {
  /** Defines how the condition must be evaluated. */
  operation: string;
  value?: Value6[];
};

export const walletProviderDeviceType2Schema: Schema<WalletProviderDeviceType2> =
  s.object<WalletProviderDeviceType2>({
    operation: s.string(),
    value: s.optional(s.array(s.lazy(() => value6Schema))),
  });
