import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount2Schema, type Amount2 } from "./amount2.js";
import { browserInfoSchema, type BrowserInfo } from "./browser-info.js";
import { channel3Schema, type Channel3 } from "./channel3.js";
import { encryptedOrderData2Schema, type EncryptedOrderData2 } from "./encrypted-order-data2.js";
import { storeFiltrationMode2Schema, type StoreFiltrationMode2 } from "./store-filtration-mode2.js";

export type PaymentMethodsRequest = {
  additionalData?: Record<string, string>;
  allowedPaymentMethods?: string[];
  amount?: Amount2;
  blockedPaymentMethods?: string[];
  browserInfo?: BrowserInfo;
  channel?: Channel3;
  countryCode?: string;
  merchantAccount: string;
  order?: EncryptedOrderData2;
  shopperConversionId?: string;
  shopperEmail?: string;
  shopperIp?: string;
  shopperLocale?: string;
  shopperReference?: string;
  splitCardFundingSources?: boolean;
  store?: string;
  storeFiltrationMode?: StoreFiltrationMode2;
  telephoneNumber?: string;
};

export const paymentMethodsRequestSchema: Schema<PaymentMethodsRequest> = s.object<PaymentMethodsRequest>({
  additionalData: s.optional(s.record(s.string(), s.string())),
  allowedPaymentMethods: s.optional(s.array(s.string())),
  amount: s.optional(s.lazy(() => amount2Schema)),
  blockedPaymentMethods: s.optional(s.array(s.string())),
  browserInfo: s.optional(s.lazy(() => browserInfoSchema)),
  channel: s.optional(s.lazy(() => channel3Schema)),
  countryCode: s.optional(s.string()),
  merchantAccount: s.string(),
  order: s.optional(s.lazy(() => encryptedOrderData2Schema)),
  shopperConversionId: s.optional(s.string()),
  shopperEmail: s.optional(s.string()),
  shopperIp: s.optional(s.string()),
  shopperLocale: s.optional(s.string()),
  shopperReference: s.optional(s.string()),
  splitCardFundingSources: s.optional(s.boolean()),
  store: s.optional(s.string()),
  storeFiltrationMode: s.optional(s.lazy(() => storeFiltrationMode2Schema)),
  telephoneNumber: s.optional(s.string()),
  _keysMap: {
    shopperIp: "shopperIP",
  },
});
