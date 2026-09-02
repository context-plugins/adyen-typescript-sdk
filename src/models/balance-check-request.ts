import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountInfoSchema, type AccountInfo } from "./account-info.js";
import { address1Schema, type Address1 } from "./address1.js";
import { address2Schema, type Address2 } from "./address2.js";
import { amount1Schema, type Amount1 } from "./amount1.js";
import { amount2Schema, type Amount2 } from "./amount2.js";
import { applicationInfoSchema, type ApplicationInfo } from "./application-info.js";
import { browserInfoSchema, type BrowserInfo } from "./browser-info.js";
import { forexQuote2Schema, type ForexQuote2 } from "./forex-quote2.js";
import { installmentsSchema, type Installments } from "./installments.js";
import { merchantRiskIndicator1Schema, type MerchantRiskIndicator1 } from "./merchant-risk-indicator1.js";
import { name7Schema, type Name7 } from "./name7.js";
import {
  recurringProcessingModelSchema,
  type RecurringProcessingModel,
} from "./recurring-processing-model.js";
import { recurringSchema, type Recurring } from "./recurring.js";
import { shopperInteractionSchema, type ShopperInteraction } from "./shopper-interaction.js";
import { splitSchema, type Split } from "./split.js";
import { threeDs2RequestData2Schema, type ThreeDs2RequestData2 } from "./three-ds2-request-data2.js";

export type BalanceCheckRequest = {
  accountInfo?: AccountInfo;
  additionalAmount?: Amount1;
  additionalData?: Record<string, string>;
  amount: Amount2;
  applicationInfo?: ApplicationInfo;
  billingAddress?: Address1;
  browserInfo?: BrowserInfo;
  captureDelayHours?: number;
  dateOfBirth?: string;
  dccQuote?: ForexQuote2;
  deliveryAddress?: Address2;
  deliveryDate?: Date;
  deviceFingerprint?: string;
  fraudOffset?: number;
  installments?: Installments;
  localizedShopperStatement?: Record<string, string>;
  mcc?: string;
  merchantAccount: string;
  merchantOrderReference?: string;
  merchantRiskIndicator?: MerchantRiskIndicator1;
  metadata?: Record<string, string>;
  orderReference?: string;
  paymentMethod: Record<string, string>;
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
  shopperName?: Name7;
  shopperReference?: string;
  shopperStatement?: string;
  socialSecurityNumber?: string;
  splits?: Split[];
  store?: string;
  telephoneNumber?: string;
  threeDs2RequestData?: ThreeDs2RequestData2;
  threeDsAuthenticationOnly?: boolean;
  totalsGroup?: string;
  trustedShopper?: boolean;
};

export const balanceCheckRequestSchema: Schema<BalanceCheckRequest> = s.object<BalanceCheckRequest>({
  accountInfo: s.optional(s.lazy(() => accountInfoSchema)),
  additionalAmount: s.optional(s.lazy(() => amount1Schema)),
  additionalData: s.optional(s.record(s.string(), s.string())),
  amount: amount2Schema,
  applicationInfo: s.optional(s.lazy(() => applicationInfoSchema)),
  billingAddress: s.optional(s.lazy(() => address1Schema)),
  browserInfo: s.optional(s.lazy(() => browserInfoSchema)),
  captureDelayHours: s.optional(s.number()),
  dateOfBirth: s.optional(s.dateOnly()),
  dccQuote: s.optional(s.lazy(() => forexQuote2Schema)),
  deliveryAddress: s.optional(s.lazy(() => address2Schema)),
  deliveryDate: s.optional(s.dateTime()),
  deviceFingerprint: s.optional(s.string()),
  fraudOffset: s.optional(s.number()),
  installments: s.optional(s.lazy(() => installmentsSchema)),
  localizedShopperStatement: s.optional(s.record(s.string(), s.string())),
  mcc: s.optional(s.string()),
  merchantAccount: s.string(),
  merchantOrderReference: s.optional(s.string()),
  merchantRiskIndicator: s.optional(s.lazy(() => merchantRiskIndicator1Schema)),
  metadata: s.optional(s.record(s.string(), s.string())),
  orderReference: s.optional(s.string()),
  paymentMethod: s.record(s.string(), s.string()),
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
  shopperName: s.optional(s.lazy(() => name7Schema)),
  shopperReference: s.optional(s.string()),
  shopperStatement: s.optional(s.string()),
  socialSecurityNumber: s.optional(s.string()),
  splits: s.optional(s.array(s.lazy(() => splitSchema))),
  store: s.optional(s.string()),
  telephoneNumber: s.optional(s.string()),
  threeDs2RequestData: s.optional(s.lazy(() => threeDs2RequestData2Schema)),
  threeDsAuthenticationOnly: s.optional(s.boolean()),
  totalsGroup: s.optional(s.string()),
  trustedShopper: s.optional(s.boolean()),
  _keysMap: {
    shopperIp: "shopperIP",
    threeDs2RequestData: "threeDS2RequestData",
    threeDsAuthenticationOnly: "threeDSAuthenticationOnly",
  },
});
