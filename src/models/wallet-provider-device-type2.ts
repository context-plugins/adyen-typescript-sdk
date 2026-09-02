import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { value6Schema, type Value6 } from "./value6.js";

export type WalletProviderDeviceType2 = {
  operation: string;
  value?: Value6[];
};

export const walletProviderDeviceType2Schema: Schema<WalletProviderDeviceType2> =
  s.object<WalletProviderDeviceType2>({
    operation: s.string(),
    value: s.optional(s.array(s.lazy(() => value6Schema))),
  });
