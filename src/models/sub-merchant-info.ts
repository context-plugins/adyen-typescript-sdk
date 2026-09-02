import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount32Schema, type Amount32 } from "./amount32.js";
import { billingAddress4Schema, type BillingAddress4 } from "./billing-address4.js";

export type SubMerchantInfo = {
  address?: BillingAddress4;
  amount?: Amount32;
  email?: string;
  id?: string;
  mcc?: string;
  name?: string;
  phoneNumber?: string;
  registeredSince?: string;
  taxId?: string;
  url?: string;
};

export const subMerchantInfoSchema: Schema<SubMerchantInfo> = s.object<SubMerchantInfo>({
  address: s.optional(s.lazy(() => billingAddress4Schema)),
  amount: s.optional(s.lazy(() => amount32Schema)),
  email: s.optional(s.string()),
  id: s.optional(s.string()),
  mcc: s.optional(s.string()),
  name: s.optional(s.string()),
  phoneNumber: s.optional(s.string()),
  registeredSince: s.optional(s.string()),
  taxId: s.optional(s.string()),
  url: s.optional(s.string()),
});
