import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SubMerchant = {
  city?: string;
  country?: string;
  mcc?: string;
  name?: string;
  taxId?: string;
};

export const subMerchantSchema: Schema<SubMerchant> = s.object<SubMerchant>({
  city: s.optional(s.string()),
  country: s.optional(s.string()),
  mcc: s.optional(s.string()),
  name: s.optional(s.string()),
  taxId: s.optional(s.string()),
});
