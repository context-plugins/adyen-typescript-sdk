import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Merchant device information. */
export type MerchantDevice = {
  /** Operating system running on the merchant device. */
  os?: string;
  /** Version of the operating system on the merchant device. */
  osVersion?: string;
  /** Merchant device reference. */
  reference?: string;
};

export const merchantDeviceSchema: Schema<MerchantDevice> = s.object<MerchantDevice>({
  os: s.optional(s.string()),
  osVersion: s.optional(s.string()),
  reference: s.optional(s.string()),
});
