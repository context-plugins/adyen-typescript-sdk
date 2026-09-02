import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferNotificationMerchantData = {
  acquirerId?: string;
  city?: string;
  country?: string;
  countryCode?: string;
  mcc?: string;
  merchantId?: string;
  name?: string;
  postalCode?: string;
};

export const transferNotificationMerchantDataSchema: Schema<TransferNotificationMerchantData> =
  s.object<TransferNotificationMerchantData>({
    acquirerId: s.optional(s.string()),
    city: s.optional(s.string()),
    country: s.optional(s.string()),
    countryCode: s.optional(s.string()),
    mcc: s.optional(s.string()),
    merchantId: s.optional(s.string()),
    name: s.optional(s.string()),
    postalCode: s.optional(s.string()),
  });
