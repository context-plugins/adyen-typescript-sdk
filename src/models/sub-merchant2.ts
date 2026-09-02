import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SubMerchant2 = {
  city?: string;
  country?: string;
  mcc?: string;
  name?: string;
  taxId?: string;
};

export const subMerchant2Schema: Schema<SubMerchant2> = s.object<SubMerchant2>({
  city: s.optional(s.string()),
  country: s.optional(s.string()),
  mcc: s.optional(s.string()),
  name: s.optional(s.string()),
  taxId: s.optional(s.string()),
});
