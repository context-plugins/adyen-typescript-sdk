import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountInfoSchema, type AccountInfo } from "./account-info.js";
import { addressSchema, type Address } from "./address.js";
import { amountSchema, type Amount } from "./amount.js";
import { applicationInfoSchema, type ApplicationInfo } from "./application-info.js";
import { browserInfoSchema, type BrowserInfo } from "./browser-info.js";
import { forexQuote11Schema, type ForexQuote11 } from "./forex-quote11.js";
import { installmentsSchema, type Installments } from "./installments.js";
import { merchantRiskIndicator11Schema, type MerchantRiskIndicator11 } from "./merchant-risk-indicator11.js";
import { nameSchema, type Name } from "./name.js";
import {
  recurringProcessingModelSchema,
  type RecurringProcessingModel,
} from "./recurring-processing-model.js";
import { recurringSchema, type Recurring } from "./recurring.js";
import { shopperInteractionSchema, type ShopperInteraction } from "./shopper-interaction.js";
import { splitSchema, type Split } from "./split.js";
import { threeDs2RequestData11Schema, type ThreeDs2RequestData11 } from "./three-ds2-request-data11.js";

export type PaymentRequest3D = {
  accountInfo?: AccountInfo;
  additionalAmount?: Amount;
  additionalData?: Record<string, string>;
  amount?: Amount;
  applicationInfo?: ApplicationInfo;
  billingAddress?: Address;
  browserInfo?: BrowserInfo;
  captureDelayHours?: number;
  dateOfBirth?: string;
  dccQuote?: ForexQuote11;
  deliveryAddress?: Address;
  deliveryDate?: Date;
  deviceFingerprint?: string;
  fraudOffset?: number;
  installments?: Installments;
  localizedShopperStatement?: Record<string, string>;
  mcc?: string;
  md: string;
  merchantAccount: string;
  merchantOrderReference?: string;
  merchantRiskIndicator?: MerchantRiskIndicator11;
  metadata?: Record<string, string>;
  orderReference?: string;
  paResponse: string;
  recurring?: Recurring;
  recurringProcessingModel?: RecurringProcessingModel;
  reference?: string;
  selectedBrand?: string;
  selectedRecurringDetailReference?: string;
  sessionId?: string;
  shopperEmail?: string;
  shopperIp?: string;
  shopperInteraction?: ShopperInteraction;
  shopperLocale?: string;
  shopperName?: Name;
  shopperReference?: string;
  shopperStatement?: string;
  socialSecurityNumber?: string;
  splits?: Split[];
  store?: string;
  telephoneNumber?: string;
  threeDs2RequestData?: ThreeDs2RequestData11;
  threeDsAuthenticationOnly?: boolean;
  totalsGroup?: string;
  trustedShopper?: boolean;
};

export const paymentRequest3DSchema: Schema<PaymentRequest3D> = s.object<PaymentRequest3D>({
  accountInfo: s.optional(s.lazy(() => accountInfoSchema)),
  additionalAmount: s.optional(s.lazy(() => amountSchema)),
  additionalData: s.optional(s.record(s.string(), s.string())),
  amount: s.optional(s.lazy(() => amountSchema)),
  applicationInfo: s.optional(s.lazy(() => applicationInfoSchema)),
  billingAddress: s.optional(s.lazy(() => addressSchema)),
  browserInfo: s.optional(s.lazy(() => browserInfoSchema)),
  captureDelayHours: s.optional(s.number()),
  dateOfBirth: s.optional(s.dateOnly()),
  dccQuote: s.optional(s.lazy(() => forexQuote11Schema)),
  deliveryAddress: s.optional(s.lazy(() => addressSchema)),
  deliveryDate: s.optional(s.dateTime()),
  deviceFingerprint: s.optional(s.string()),
  fraudOffset: s.optional(s.number()),
  installments: s.optional(s.lazy(() => installmentsSchema)),
  localizedShopperStatement: s.optional(s.record(s.string(), s.string())),
  mcc: s.optional(s.string()),
  md: s.string(),
  merchantAccount: s.string(),
  merchantOrderReference: s.optional(s.string()),
  merchantRiskIndicator: s.optional(s.lazy(() => merchantRiskIndicator11Schema)),
  metadata: s.optional(s.record(s.string(), s.string())),
  orderReference: s.optional(s.string()),
  paResponse: s.string(),
  recurring: s.optional(s.lazy(() => recurringSchema)),
  recurringProcessingModel: s.optional(s.lazy(() => recurringProcessingModelSchema)),
  reference: s.optional(s.string()),
  selectedBrand: s.optional(s.string()),
  selectedRecurringDetailReference: s.optional(s.string()),
  sessionId: s.optional(s.string()),
  shopperEmail: s.optional(s.string()),
  shopperIp: s.optional(s.string()),
  shopperInteraction: s.optional(s.lazy(() => shopperInteractionSchema)),
  shopperLocale: s.optional(s.string()),
  shopperName: s.optional(s.lazy(() => nameSchema)),
  shopperReference: s.optional(s.string()),
  shopperStatement: s.optional(s.string()),
  socialSecurityNumber: s.optional(s.string()),
  splits: s.optional(s.array(s.lazy(() => splitSchema))),
  store: s.optional(s.string()),
  telephoneNumber: s.optional(s.string()),
  threeDs2RequestData: s.optional(s.lazy(() => threeDs2RequestData11Schema)),
  threeDsAuthenticationOnly: s.optional(s.boolean()),
  totalsGroup: s.optional(s.string()),
  trustedShopper: s.optional(s.boolean()),
  _keysMap: {
    shopperIp: "shopperIP",
    threeDs2RequestData: "threeDS2RequestData",
    threeDsAuthenticationOnly: "threeDSAuthenticationOnly",
  },
});
