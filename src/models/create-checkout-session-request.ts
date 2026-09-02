import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountInfoSchema, type AccountInfo } from "./account-info.js";
import { amount1Schema, type Amount1 } from "./amount1.js";
import { amount18Schema, type Amount18 } from "./amount18.js";
import { applicationInfoSchema, type ApplicationInfo } from "./application-info.js";
import { authenticationData1Schema, type AuthenticationData1 } from "./authentication-data1.js";
import { billingAddress1Schema, type BillingAddress1 } from "./billing-address1.js";
import { channelSchema, type Channel } from "./channel.js";
import {
  checkoutSessionInstallmentOptionSchema,
  type CheckoutSessionInstallmentOption,
} from "./checkout-session-installment-option.js";
import {
  checkoutSessionThreeDs2RequestData1Schema,
  type CheckoutSessionThreeDs2RequestData1,
} from "./checkout-session-three-ds2-request-data1.js";
import { company1Schema, type Company1 } from "./company1.js";
import { deliveryAddress1Schema, type DeliveryAddress1 } from "./delivery-address1.js";
import { fundOrigin1Schema, type FundOrigin1 } from "./fund-origin1.js";
import { fundRecipient1Schema, type FundRecipient1 } from "./fund-recipient1.js";
import { lineItemSchema, type LineItem } from "./line-item.js";
import { mandateSchema, type Mandate } from "./mandate.js";
import { modeSchema, type Mode } from "./mode.js";
import { platformChargebackLogicSchema, type PlatformChargebackLogic } from "./platform-chargeback-logic.js";
import {
  recurringProcessingModel1Schema,
  type RecurringProcessingModel1,
} from "./recurring-processing-model1.js";
import { riskData1Schema, type RiskData1 } from "./risk-data1.js";
import { shopperInteractionSchema, type ShopperInteraction } from "./shopper-interaction.js";
import { shopperName1Schema, type ShopperName1 } from "./shopper-name1.js";
import { splitSchema, type Split } from "./split.js";
import { storeFiltrationModeSchema, type StoreFiltrationMode } from "./store-filtration-mode.js";
import { storePaymentMethodModeSchema, type StorePaymentMethodMode } from "./store-payment-method-mode.js";
import {
  thirdPartyTokenRedundancyInfo1Schema,
  type ThirdPartyTokenRedundancyInfo1,
} from "./third-party-token-redundancy-info1.js";
import { threeDSecureDataSchema, type ThreeDSecureData } from "./three-dsecure-data.js";

export type CreateCheckoutSessionRequest = {
  accountInfo?: AccountInfo;
  additionalAmount?: Amount1;
  additionalData?: Record<string, string>;
  allowedPaymentMethods?: string[];
  amount: Amount18;
  applicationInfo?: ApplicationInfo;
  authenticationData?: AuthenticationData1;
  billingAddress?: BillingAddress1;
  blockedPaymentMethods?: string[];
  captureDelayHours?: number;
  channel?: Channel;
  company?: Company1;
  countryCode?: string;
  dateOfBirth?: string;
  deliverAt?: Date;
  deliveryAddress?: DeliveryAddress1;
  enableOneClick?: boolean;
  enablePayOut?: boolean;
  enableRecurring?: boolean;
  expiresAt?: Date;
  fundOrigin?: FundOrigin1;
  fundRecipient?: FundRecipient1;
  installmentOptions?: Record<string, CheckoutSessionInstallmentOption>;
  lineItems?: LineItem[];
  mandate?: Mandate;
  mcc?: string;
  merchantAccount: string;
  merchantOrderReference?: string;
  metadata?: Record<string, string>;
  mode?: Mode;
  mpiData?: ThreeDSecureData;
  platformChargebackLogic?: PlatformChargebackLogic;
  recurringExpiry?: string;
  recurringFrequency?: string;
  recurringProcessingModel?: RecurringProcessingModel1;
  redirectFromIssuerMethod?: string;
  redirectToIssuerMethod?: string;
  reference: string;
  returnUrl: string;
  riskData?: RiskData1;
  shopperConversionId?: string;
  shopperEmail?: string;
  shopperIp?: string;
  shopperInteraction?: ShopperInteraction;
  shopperLocale?: string;
  shopperName?: ShopperName1;
  shopperReference?: string;
  shopperStatement?: string;
  showInstallmentAmount?: boolean;
  showRemovePaymentMethodButton?: boolean;
  socialSecurityNumber?: string;
  splitCardFundingSources?: boolean;
  splits?: Split[];
  store?: string;
  storeFiltrationMode?: StoreFiltrationMode;
  storePaymentMethod?: boolean;
  storePaymentMethodMode?: StorePaymentMethodMode;
  telephoneNumber?: string;
  themeId?: string;
  thirdPartyTokenRedundancyInfo?: ThirdPartyTokenRedundancyInfo1;
  threeDs2RequestData?: CheckoutSessionThreeDs2RequestData1;
  threeDsAuthenticationOnly?: boolean;
  trustedShopper?: boolean;
};

export const createCheckoutSessionRequestSchema: Schema<CreateCheckoutSessionRequest> =
  s.object<CreateCheckoutSessionRequest>({
    accountInfo: s.optional(s.lazy(() => accountInfoSchema)),
    additionalAmount: s.optional(s.lazy(() => amount1Schema)),
    additionalData: s.optional(s.record(s.string(), s.string())),
    allowedPaymentMethods: s.optional(s.array(s.string())),
    amount: amount18Schema,
    applicationInfo: s.optional(s.lazy(() => applicationInfoSchema)),
    authenticationData: s.optional(s.lazy(() => authenticationData1Schema)),
    billingAddress: s.optional(s.lazy(() => billingAddress1Schema)),
    blockedPaymentMethods: s.optional(s.array(s.string())),
    captureDelayHours: s.optional(s.number()),
    channel: s.optional(s.lazy(() => channelSchema)),
    company: s.optional(s.lazy(() => company1Schema)),
    countryCode: s.optional(s.string()),
    dateOfBirth: s.optional(s.dateOnly()),
    deliverAt: s.optional(s.dateTime()),
    deliveryAddress: s.optional(s.lazy(() => deliveryAddress1Schema)),
    enableOneClick: s.optional(s.boolean()),
    enablePayOut: s.optional(s.boolean()),
    enableRecurring: s.optional(s.boolean()),
    expiresAt: s.optional(s.dateTime()),
    fundOrigin: s.optional(s.lazy(() => fundOrigin1Schema)),
    fundRecipient: s.optional(s.lazy(() => fundRecipient1Schema)),
    installmentOptions: s.optional(
      s.record(
        s.string(),
        s.lazy(() => checkoutSessionInstallmentOptionSchema),
      ),
    ),
    lineItems: s.optional(s.array(s.lazy(() => lineItemSchema))),
    mandate: s.optional(s.lazy(() => mandateSchema)),
    mcc: s.optional(s.string()),
    merchantAccount: s.string(),
    merchantOrderReference: s.optional(s.string()),
    metadata: s.optional(s.record(s.string(), s.string())),
    mode: s.optional(s.lazy(() => modeSchema)),
    mpiData: s.optional(s.lazy(() => threeDSecureDataSchema)),
    platformChargebackLogic: s.optional(s.lazy(() => platformChargebackLogicSchema)),
    recurringExpiry: s.optional(s.string()),
    recurringFrequency: s.optional(s.string()),
    recurringProcessingModel: s.optional(s.lazy(() => recurringProcessingModel1Schema)),
    redirectFromIssuerMethod: s.optional(s.string()),
    redirectToIssuerMethod: s.optional(s.string()),
    reference: s.string(),
    returnUrl: s.string(),
    riskData: s.optional(s.lazy(() => riskData1Schema)),
    shopperConversionId: s.optional(s.string()),
    shopperEmail: s.optional(s.string()),
    shopperIp: s.optional(s.string()),
    shopperInteraction: s.optional(s.lazy(() => shopperInteractionSchema)),
    shopperLocale: s.optional(s.string()),
    shopperName: s.optional(s.lazy(() => shopperName1Schema)),
    shopperReference: s.optional(s.string()),
    shopperStatement: s.optional(s.string()),
    showInstallmentAmount: s.optional(s.boolean()),
    showRemovePaymentMethodButton: s.optional(s.boolean()),
    socialSecurityNumber: s.optional(s.string()),
    splitCardFundingSources: s.optional(s.boolean()),
    splits: s.optional(s.array(s.lazy(() => splitSchema))),
    store: s.optional(s.string()),
    storeFiltrationMode: s.optional(s.lazy(() => storeFiltrationModeSchema)),
    storePaymentMethod: s.optional(s.boolean()),
    storePaymentMethodMode: s.optional(s.lazy(() => storePaymentMethodModeSchema)),
    telephoneNumber: s.optional(s.string()),
    themeId: s.optional(s.string()),
    thirdPartyTokenRedundancyInfo: s.optional(s.lazy(() => thirdPartyTokenRedundancyInfo1Schema)),
    threeDs2RequestData: s.optional(s.lazy(() => checkoutSessionThreeDs2RequestData1Schema)),
    threeDsAuthenticationOnly: s.optional(s.boolean()),
    trustedShopper: s.optional(s.boolean()),
    _keysMap: {
      shopperIp: "shopperIP",
      threeDs2RequestData: "threeDS2RequestData",
      threeDsAuthenticationOnly: "threeDSAuthenticationOnly",
    },
  });
