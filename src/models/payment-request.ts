import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountInfoSchema, type AccountInfo } from "./account-info.js";
import { amount1Schema, type Amount1 } from "./amount1.js";
import { amount2Schema, type Amount2 } from "./amount2.js";
import { applicationInfoSchema, type ApplicationInfo } from "./application-info.js";
import { authenticationData3Schema, type AuthenticationData3 } from "./authentication-data3.js";
import { billingAddress3Schema, type BillingAddress3 } from "./billing-address3.js";
import { browserInfoSchema, type BrowserInfo } from "./browser-info.js";
import { channel2Schema, type Channel2 } from "./channel2.js";
import { checkoutBankAccount1Schema, type CheckoutBankAccount1 } from "./checkout-bank-account1.js";
import { company1Schema, type Company1 } from "./company1.js";
import { deliveryAddress1Schema, type DeliveryAddress1 } from "./delivery-address1.js";
import { encryptedOrderData2Schema, type EncryptedOrderData2 } from "./encrypted-order-data2.js";
import { enhancedSchemeData3Schema, type EnhancedSchemeData3 } from "./enhanced-scheme-data3.js";
import { entityTypeSchema, type EntityType } from "./entity-type.js";
import { forexQuote2Schema, type ForexQuote2 } from "./forex-quote2.js";
import { fundOrigin1Schema, type FundOrigin1 } from "./fund-origin1.js";
import { fundRecipient1Schema, type FundRecipient1 } from "./fund-recipient1.js";
import { industryUsage1Schema, type IndustryUsage1 } from "./industry-usage1.js";
import { installmentsSchema, type Installments } from "./installments.js";
import { lineItemSchema, type LineItem } from "./line-item.js";
import { mandateSchema, type Mandate } from "./mandate.js";
import { merchantRiskIndicator1Schema, type MerchantRiskIndicator1 } from "./merchant-risk-indicator1.js";
import { paymentValidations2Schema, type PaymentValidations2 } from "./payment-validations2.js";
import { platformChargebackLogicSchema, type PlatformChargebackLogic } from "./platform-chargeback-logic.js";
import {
  recurringProcessingModelSchema,
  type RecurringProcessingModel,
} from "./recurring-processing-model.js";
import { riskData4Schema, type RiskData4 } from "./risk-data4.js";
import { shopperInteractionSchema, type ShopperInteraction } from "./shopper-interaction.js";
import { shopperName2Schema, type ShopperName2 } from "./shopper-name2.js";
import { shopperTaxInfo2Schema, type ShopperTaxInfo2 } from "./shopper-tax-info2.js";
import { splitSchema, type Split } from "./split.js";
import { subMerchantInfoSchema, type SubMerchantInfo } from "./sub-merchant-info.js";
import { surcharge2Schema, type Surcharge2 } from "./surcharge2.js";
import {
  thirdPartyTokenRedundancyInfo1Schema,
  type ThirdPartyTokenRedundancyInfo1,
} from "./third-party-token-redundancy-info1.js";
import { threeDs2RequestFields1Schema, type ThreeDs2RequestFields1 } from "./three-ds2-request-fields1.js";
import { threeDSecureDataSchema, type ThreeDSecureData } from "./three-dsecure-data.js";
import { paymentMethod11Schema, type PaymentMethod11 } from "./unions/payment-method11.js";

export type PaymentRequest = {
  accountInfo?: AccountInfo;
  additionalAmount?: Amount1;
  additionalData?: Record<string, string>;
  amount: Amount2;
  applicationInfo?: ApplicationInfo;
  authenticationData?: AuthenticationData3;
  bankAccount?: CheckoutBankAccount1;
  billingAddress?: BillingAddress3;
  browserInfo?: BrowserInfo;
  captureDelayHours?: number;
  channel?: Channel2;
  checkoutAttemptId?: string;
  company?: Company1;
  countryCode?: string;
  dateOfBirth?: Date;
  dccQuote?: ForexQuote2;
  deliverAt?: Date;
  deliveryAddress?: DeliveryAddress1;
  deliveryDate?: Date;
  deviceFingerprint?: string;
  enableOneClick?: boolean;
  enablePayOut?: boolean;
  enableRecurring?: boolean;
  enhancedSchemeData?: EnhancedSchemeData3;
  entityType?: EntityType;
  fraudOffset?: number;
  fundOrigin?: FundOrigin1;
  fundRecipient?: FundRecipient1;
  industryUsage?: IndustryUsage1;
  installments?: Installments;
  lineItems?: LineItem[];
  localizedShopperStatement?: Record<string, string>;
  mandate?: Mandate;
  mcc?: string;
  merchantAccount: string;
  merchantOrderReference?: string;
  merchantRiskIndicator?: MerchantRiskIndicator1;
  metadata?: Record<string, string>;
  mpiData?: ThreeDSecureData;
  order?: EncryptedOrderData2;
  orderReference?: string;
  origin?: string;
  paymentMethod: PaymentMethod11;
  paymentValidations?: PaymentValidations2;
  platformChargebackLogic?: PlatformChargebackLogic;
  recurringExpiry?: string;
  recurringFrequency?: string;
  recurringProcessingModel?: RecurringProcessingModel;
  redirectFromIssuerMethod?: string;
  redirectToIssuerMethod?: string;
  reference: string;
  returnUrl: string;
  riskData?: RiskData4;
  sessionValidity?: string;
  shopperConversionId?: string;
  shopperEmail?: string;
  shopperIp?: string;
  shopperInteraction?: ShopperInteraction;
  shopperLocale?: string;
  shopperName?: ShopperName2;
  shopperReference?: string;
  shopperStatement?: string;
  shopperTaxInfo?: ShopperTaxInfo2;
  socialSecurityNumber?: string;
  splits?: Split[];
  store?: string;
  storePaymentMethod?: boolean;
  subMerchants?: SubMerchantInfo[];
  surcharge?: Surcharge2;
  telephoneNumber?: string;
  thirdPartyTokenRedundancyInfo?: ThirdPartyTokenRedundancyInfo1;
  threeDs2RequestData?: ThreeDs2RequestFields1;
  threeDsAuthenticationOnly?: boolean;
  trustedShopper?: boolean;
};

export const paymentRequestSchema: Schema<PaymentRequest> = s.object<PaymentRequest>({
  accountInfo: s.optional(s.lazy(() => accountInfoSchema)),
  additionalAmount: s.optional(s.lazy(() => amount1Schema)),
  additionalData: s.optional(s.record(s.string(), s.string())),
  amount: amount2Schema,
  applicationInfo: s.optional(s.lazy(() => applicationInfoSchema)),
  authenticationData: s.optional(s.lazy(() => authenticationData3Schema)),
  bankAccount: s.optional(s.lazy(() => checkoutBankAccount1Schema)),
  billingAddress: s.optional(s.lazy(() => billingAddress3Schema)),
  browserInfo: s.optional(s.lazy(() => browserInfoSchema)),
  captureDelayHours: s.optional(s.number()),
  channel: s.optional(s.lazy(() => channel2Schema)),
  checkoutAttemptId: s.optional(s.string()),
  company: s.optional(s.lazy(() => company1Schema)),
  countryCode: s.optional(s.string()),
  dateOfBirth: s.optional(s.dateTime()),
  dccQuote: s.optional(s.lazy(() => forexQuote2Schema)),
  deliverAt: s.optional(s.dateTime()),
  deliveryAddress: s.optional(s.lazy(() => deliveryAddress1Schema)),
  deliveryDate: s.optional(s.dateTime()),
  deviceFingerprint: s.optional(s.string()),
  enableOneClick: s.optional(s.boolean()),
  enablePayOut: s.optional(s.boolean()),
  enableRecurring: s.optional(s.boolean()),
  enhancedSchemeData: s.optional(s.lazy(() => enhancedSchemeData3Schema)),
  entityType: s.optional(s.lazy(() => entityTypeSchema)),
  fraudOffset: s.optional(s.number()),
  fundOrigin: s.optional(s.lazy(() => fundOrigin1Schema)),
  fundRecipient: s.optional(s.lazy(() => fundRecipient1Schema)),
  industryUsage: s.optional(s.lazy(() => industryUsage1Schema)),
  installments: s.optional(s.lazy(() => installmentsSchema)),
  lineItems: s.optional(s.array(s.lazy(() => lineItemSchema))),
  localizedShopperStatement: s.optional(s.record(s.string(), s.string())),
  mandate: s.optional(s.lazy(() => mandateSchema)),
  mcc: s.optional(s.string()),
  merchantAccount: s.string(),
  merchantOrderReference: s.optional(s.string()),
  merchantRiskIndicator: s.optional(s.lazy(() => merchantRiskIndicator1Schema)),
  metadata: s.optional(s.record(s.string(), s.string())),
  mpiData: s.optional(s.lazy(() => threeDSecureDataSchema)),
  order: s.optional(s.lazy(() => encryptedOrderData2Schema)),
  orderReference: s.optional(s.string()),
  origin: s.optional(s.string()),
  paymentMethod: paymentMethod11Schema,
  paymentValidations: s.optional(s.lazy(() => paymentValidations2Schema)),
  platformChargebackLogic: s.optional(s.lazy(() => platformChargebackLogicSchema)),
  recurringExpiry: s.optional(s.string()),
  recurringFrequency: s.optional(s.string()),
  recurringProcessingModel: s.optional(s.lazy(() => recurringProcessingModelSchema)),
  redirectFromIssuerMethod: s.optional(s.string()),
  redirectToIssuerMethod: s.optional(s.string()),
  reference: s.string(),
  returnUrl: s.string(),
  riskData: s.optional(s.lazy(() => riskData4Schema)),
  sessionValidity: s.optional(s.string()),
  shopperConversionId: s.optional(s.string()),
  shopperEmail: s.optional(s.string()),
  shopperIp: s.optional(s.string()),
  shopperInteraction: s.optional(s.lazy(() => shopperInteractionSchema)),
  shopperLocale: s.optional(s.string()),
  shopperName: s.optional(s.lazy(() => shopperName2Schema)),
  shopperReference: s.optional(s.string()),
  shopperStatement: s.optional(s.string()),
  shopperTaxInfo: s.optional(s.lazy(() => shopperTaxInfo2Schema)),
  socialSecurityNumber: s.optional(s.string()),
  splits: s.optional(s.array(s.lazy(() => splitSchema))),
  store: s.optional(s.string()),
  storePaymentMethod: s.optional(s.boolean()),
  subMerchants: s.optional(s.array(s.lazy(() => subMerchantInfoSchema))),
  surcharge: s.optional(s.lazy(() => surcharge2Schema)),
  telephoneNumber: s.optional(s.string()),
  thirdPartyTokenRedundancyInfo: s.optional(s.lazy(() => thirdPartyTokenRedundancyInfo1Schema)),
  threeDs2RequestData: s.optional(s.lazy(() => threeDs2RequestFields1Schema)),
  threeDsAuthenticationOnly: s.optional(s.boolean()),
  trustedShopper: s.optional(s.boolean()),
  _keysMap: {
    shopperIp: "shopperIP",
    threeDs2RequestData: "threeDS2RequestData",
    threeDsAuthenticationOnly: "threeDSAuthenticationOnly",
  },
});
