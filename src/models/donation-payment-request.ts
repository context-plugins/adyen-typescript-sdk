import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountInfoSchema, type AccountInfo } from "./account-info.js";
import { amount2Schema, type Amount2 } from "./amount2.js";
import { applicationInfoSchema, type ApplicationInfo } from "./application-info.js";
import { authenticationData3Schema, type AuthenticationData3 } from "./authentication-data3.js";
import { billingAddress3Schema, type BillingAddress3 } from "./billing-address3.js";
import { browserInfoSchema, type BrowserInfo } from "./browser-info.js";
import { channel2Schema, type Channel2 } from "./channel2.js";
import { deliveryAddress1Schema, type DeliveryAddress1 } from "./delivery-address1.js";
import { lineItemSchema, type LineItem } from "./line-item.js";
import { merchantRiskIndicator1Schema, type MerchantRiskIndicator1 } from "./merchant-risk-indicator1.js";
import {
  recurringProcessingModelSchema,
  type RecurringProcessingModel,
} from "./recurring-processing-model.js";
import { shopperInteraction3Schema, type ShopperInteraction3 } from "./shopper-interaction3.js";
import { shopperName2Schema, type ShopperName2 } from "./shopper-name2.js";
import { threeDs2RequestFields1Schema, type ThreeDs2RequestFields1 } from "./three-ds2-request-fields1.js";
import { threeDSecureDataSchema, type ThreeDSecureData } from "./three-dsecure-data.js";
import { paymentMethod1Schema, type PaymentMethod1 } from "./unions/payment-method1.js";

export type DonationPaymentRequest = {
  accountInfo?: AccountInfo;
  amount: Amount2;
  applicationInfo?: ApplicationInfo;
  authenticationData?: AuthenticationData3;
  billingAddress?: BillingAddress3;
  browserInfo?: BrowserInfo;
  channel?: Channel2;
  checkoutAttemptId?: string;
  countryCode?: string;
  dateOfBirth?: Date;
  deliveryAddress?: DeliveryAddress1;
  deviceFingerprint?: string;
  donationAccount?: string;
  donationCampaignId?: string;
  donationOriginalPspReference?: string;
  donationToken?: string;
  lineItems?: LineItem[];
  merchantAccount: string;
  merchantRiskIndicator?: MerchantRiskIndicator1;
  metadata?: Record<string, string>;
  mpiData?: ThreeDSecureData;
  origin?: string;
  paymentMethod?: PaymentMethod1;
  recurringProcessingModel?: RecurringProcessingModel;
  redirectFromIssuerMethod?: string;
  redirectToIssuerMethod?: string;
  reference: string;
  returnUrl: string;
  sessionValidity?: string;
  shopperEmail?: string;
  shopperIp?: string;
  shopperInteraction?: ShopperInteraction3;
  shopperLocale?: string;
  shopperName?: ShopperName2;
  shopperReference?: string;
  socialSecurityNumber?: string;
  store?: string;
  telephoneNumber?: string;
  threeDs2RequestData?: ThreeDs2RequestFields1;
};

export const donationPaymentRequestSchema: Schema<DonationPaymentRequest> = s.object<DonationPaymentRequest>({
  accountInfo: s.optional(s.lazy(() => accountInfoSchema)),
  amount: amount2Schema,
  applicationInfo: s.optional(s.lazy(() => applicationInfoSchema)),
  authenticationData: s.optional(s.lazy(() => authenticationData3Schema)),
  billingAddress: s.optional(s.lazy(() => billingAddress3Schema)),
  browserInfo: s.optional(s.lazy(() => browserInfoSchema)),
  channel: s.optional(s.lazy(() => channel2Schema)),
  checkoutAttemptId: s.optional(s.string()),
  countryCode: s.optional(s.string()),
  dateOfBirth: s.optional(s.dateTime()),
  deliveryAddress: s.optional(s.lazy(() => deliveryAddress1Schema)),
  deviceFingerprint: s.optional(s.string()),
  donationAccount: s.optional(s.string()),
  donationCampaignId: s.optional(s.string()),
  donationOriginalPspReference: s.optional(s.string()),
  donationToken: s.optional(s.string()),
  lineItems: s.optional(s.array(s.lazy(() => lineItemSchema))),
  merchantAccount: s.string(),
  merchantRiskIndicator: s.optional(s.lazy(() => merchantRiskIndicator1Schema)),
  metadata: s.optional(s.record(s.string(), s.string())),
  mpiData: s.optional(s.lazy(() => threeDSecureDataSchema)),
  origin: s.optional(s.string()),
  paymentMethod: s.optional(s.lazy(() => paymentMethod1Schema)),
  recurringProcessingModel: s.optional(s.lazy(() => recurringProcessingModelSchema)),
  redirectFromIssuerMethod: s.optional(s.string()),
  redirectToIssuerMethod: s.optional(s.string()),
  reference: s.string(),
  returnUrl: s.string(),
  sessionValidity: s.optional(s.string()),
  shopperEmail: s.optional(s.string()),
  shopperIp: s.optional(s.string()),
  shopperInteraction: s.optional(s.lazy(() => shopperInteraction3Schema)),
  shopperLocale: s.optional(s.string()),
  shopperName: s.optional(s.lazy(() => shopperName2Schema)),
  shopperReference: s.optional(s.string()),
  socialSecurityNumber: s.optional(s.string()),
  store: s.optional(s.string()),
  telephoneNumber: s.optional(s.string()),
  threeDs2RequestData: s.optional(s.lazy(() => threeDs2RequestFields1Schema)),
  _keysMap: {
    shopperIp: "shopperIP",
    threeDs2RequestData: "threeDS2RequestData",
  },
});
