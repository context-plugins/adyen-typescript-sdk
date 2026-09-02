import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MerchantDevice = {
  os?: string;
  osVersion?: string;
  reference?: string;
};

export const merchantDeviceSchema: Schema<MerchantDevice> = s.object<MerchantDevice>({
  os: s.optional(s.string()),
  osVersion: s.optional(s.string()),
  reference: s.optional(s.string()),
});
