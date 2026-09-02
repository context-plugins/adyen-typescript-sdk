import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SubMerchantData21 = {
  city?: string;
  country?: string;
  displayName: string;
  email?: string;
  id: string;
  mcc: string;
  name: string;
  phoneNumber?: string;
  postalCode?: string;
  state?: string;
  street?: string;
  taxId?: string;
};

export const subMerchantData21Schema: Schema<SubMerchantData21> = s.object<SubMerchantData21>({
  city: s.optional(s.string()),
  country: s.optional(s.string()),
  displayName: s.string(),
  email: s.optional(s.string()),
  id: s.string(),
  mcc: s.string(),
  name: s.string(),
  phoneNumber: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  state: s.optional(s.string()),
  street: s.optional(s.string()),
  taxId: s.optional(s.string()),
});
