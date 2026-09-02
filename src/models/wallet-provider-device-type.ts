import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { value6Schema, type Value6 } from "./value6.js";

export type WalletProviderDeviceType = {
  operation: string;
  value?: Value6[];
};

export const walletProviderDeviceTypeSchema: Schema<WalletProviderDeviceType> =
  s.object<WalletProviderDeviceType>({
    operation: s.string(),
    value: s.optional(s.array(s.lazy(() => value6Schema))),
  });
