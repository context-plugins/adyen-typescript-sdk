import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountInfoSchema, type AccountInfo } from "./account-info.js";
import { addressSchema, type Address } from "./address.js";
import { amountSchema, type Amount } from "./amount.js";
import { applicationInfoSchema, type ApplicationInfo } from "./application-info.js";
import { bankAccount1Schema, type BankAccount1 } from "./bank-account1.js";
import { browserInfoSchema, type BrowserInfo } from "./browser-info.js";
import { card3Schema, type Card3 } from "./card3.js";
import { entityTypeSchema, type EntityType } from "./entity-type.js";
import { forexQuote11Schema, type ForexQuote11 } from "./forex-quote11.js";
import { fundDestination1Schema, type FundDestination1 } from "./fund-destination1.js";
import { fundSource1Schema, type FundSource1 } from "./fund-source1.js";
import { fundingSourceSchema, type FundingSource } from "./funding-source.js";
import { installmentsSchema, type Installments } from "./installments.js";
import { mandateSchema, type Mandate } from "./mandate.js";
import { merchantRiskIndicator11Schema, type MerchantRiskIndicator11 } from "./merchant-risk-indicator11.js";
import { nameSchema, type Name } from "./name.js";
import { platformChargebackLogicSchema, type PlatformChargebackLogic } from "./platform-chargeback-logic.js";
import {
  recurringProcessingModelSchema,
  type RecurringProcessingModel,
} from "./recurring-processing-model.js";
import { recurringSchema, type Recurring } from "./recurring.js";
import {
  secureRemoteCommerceCheckoutData2Schema,
  type SecureRemoteCommerceCheckoutData2,
} from "./secure-remote-commerce-checkout-data2.js";
import { shopperInteractionSchema, type ShopperInteraction } from "./shopper-interaction.js";
import { splitSchema, type Split } from "./split.js";
import { threeDs2RequestData11Schema, type ThreeDs2RequestData11 } from "./three-ds2-request-data11.js";
import { threeDSecureDataSchema, type ThreeDSecureData } from "./three-dsecure-data.js";

export type PaymentRequest1 = {
  accountInfo?: AccountInfo;
  additionalAmount?: Amount;
  additionalData?: Record<string, string>;
  amount: Amount;
  applicationInfo?: ApplicationInfo;
  bankAccount?: BankAccount1;
  billingAddress?: Address;
  browserInfo?: BrowserInfo;
  captureDelayHours?: number;
  card?: Card3;
  dateOfBirth?: string;
  dccQuote?: ForexQuote11;
  deliveryAddress?: Address;
  deliveryDate?: Date;
  deviceFingerprint?: string;
  entityType?: EntityType;
  fraudOffset?: number;
  fundDestination?: FundDestination1;
  fundSource?: FundSource1;
  fundingSource?: FundingSource;
  installments?: Installments;
  localizedShopperStatement?: Record<string, string>;
  mandate?: Mandate;
  mcc?: string;
  merchantAccount: string;
  merchantOrderReference?: string;
  merchantRiskIndicator?: MerchantRiskIndicator11;
  metadata?: Record<string, string>;
  mpiData?: ThreeDSecureData;
  nationality?: string;
  orderReference?: string;
  platformChargebackLogic?: PlatformChargebackLogic;
  recurring?: Recurring;
  recurringProcessingModel?: RecurringProcessingModel;
  reference: string;
  secureRemoteCommerceCheckoutData?: SecureRemoteCommerceCheckoutData2;
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

export const paymentRequest1Schema: Schema<PaymentRequest1> = s.object<PaymentRequest1>({
  accountInfo: s.optional(s.lazy(() => accountInfoSchema)),
  additionalAmount: s.optional(s.lazy(() => amountSchema)),
  additionalData: s.optional(s.record(s.string(), s.string())),
  amount: amountSchema,
  applicationInfo: s.optional(s.lazy(() => applicationInfoSchema)),
  bankAccount: s.optional(s.lazy(() => bankAccount1Schema)),
  billingAddress: s.optional(s.lazy(() => addressSchema)),
  browserInfo: s.optional(s.lazy(() => browserInfoSchema)),
  captureDelayHours: s.optional(s.number()),
  card: s.optional(s.lazy(() => card3Schema)),
  dateOfBirth: s.optional(s.dateOnly()),
  dccQuote: s.optional(s.lazy(() => forexQuote11Schema)),
  deliveryAddress: s.optional(s.lazy(() => addressSchema)),
  deliveryDate: s.optional(s.dateTime()),
  deviceFingerprint: s.optional(s.string()),
  entityType: s.optional(s.lazy(() => entityTypeSchema)),
  fraudOffset: s.optional(s.number()),
  fundDestination: s.optional(s.lazy(() => fundDestination1Schema)),
  fundSource: s.optional(s.lazy(() => fundSource1Schema)),
  fundingSource: s.optional(s.lazy(() => fundingSourceSchema)),
  installments: s.optional(s.lazy(() => installmentsSchema)),
  localizedShopperStatement: s.optional(s.record(s.string(), s.string())),
  mandate: s.optional(s.lazy(() => mandateSchema)),
  mcc: s.optional(s.string()),
  merchantAccount: s.string(),
  merchantOrderReference: s.optional(s.string()),
  merchantRiskIndicator: s.optional(s.lazy(() => merchantRiskIndicator11Schema)),
  metadata: s.optional(s.record(s.string(), s.string())),
  mpiData: s.optional(s.lazy(() => threeDSecureDataSchema)),
  nationality: s.optional(s.string()),
  orderReference: s.optional(s.string()),
  platformChargebackLogic: s.optional(s.lazy(() => platformChargebackLogicSchema)),
  recurring: s.optional(s.lazy(() => recurringSchema)),
  recurringProcessingModel: s.optional(s.lazy(() => recurringProcessingModelSchema)),
  reference: s.string(),
  secureRemoteCommerceCheckoutData: s.optional(s.lazy(() => secureRemoteCommerceCheckoutData2Schema)),
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
