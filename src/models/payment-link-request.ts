import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { address2Schema, type Address2 } from "./address2.js";
import { address3Schema, type Address3 } from "./address3.js";
import { amount35Schema, type Amount35 } from "./amount35.js";
import { applicationInfoSchema, type ApplicationInfo } from "./application-info.js";
import {
  checkoutSessionThreeDs2RequestData3Schema,
  type CheckoutSessionThreeDs2RequestData3,
} from "./checkout-session-three-ds2-request-data3.js";
import { fundOrigin1Schema, type FundOrigin1 } from "./fund-origin1.js";
import { fundRecipient1Schema, type FundRecipient1 } from "./fund-recipient1.js";
import { installmentOptionSchema, type InstallmentOption } from "./installment-option.js";
import { lineItemSchema, type LineItem } from "./line-item.js";
import { name4Schema, type Name4 } from "./name4.js";
import {
  platformChargebackLogic4Schema,
  type PlatformChargebackLogic4,
} from "./platform-chargeback-logic4.js";
import {
  recurringProcessingModel4Schema,
  type RecurringProcessingModel4,
} from "./recurring-processing-model4.js";
import { requiredShopperFieldSchema, type RequiredShopperField } from "./required-shopper-field.js";
import { riskData1Schema, type RiskData1 } from "./risk-data1.js";
import { splitSchema, type Split } from "./split.js";
import { storePaymentMethodMode2Schema, type StorePaymentMethodMode2 } from "./store-payment-method-mode2.js";

export type PaymentLinkRequest = {
  allowedPaymentMethods?: string[];
  amount: Amount35;
  applicationInfo?: ApplicationInfo;
  billingAddress?: Address3;
  blockedPaymentMethods?: string[];
  captureDelayHours?: number;
  countryCode?: string;
  dateOfBirth?: string;
  deliverAt?: Date;
  deliveryAddress?: Address2;
  description?: string;
  expiresAt?: Date;
  fundOrigin?: FundOrigin1;
  fundRecipient?: FundRecipient1;
  installmentOptions?: Record<string, InstallmentOption>;
  lineItems?: LineItem[];
  manualCapture?: boolean;
  mcc?: string;
  merchantAccount: string;
  merchantOrderReference?: string;
  metadata?: Record<string, string>;
  platformChargebackLogic?: PlatformChargebackLogic4;
  recurringProcessingModel?: RecurringProcessingModel4;
  reference: string;
  requiredShopperFields?: RequiredShopperField[];
  returnUrl?: string;
  reusable?: boolean;
  riskData?: RiskData1;
  shopperEmail?: string;
  shopperLocale?: string;
  shopperName?: Name4;
  shopperReference?: string;
  shopperStatement?: string;
  showRemovePaymentMethodButton?: boolean;
  socialSecurityNumber?: string;
  splitCardFundingSources?: boolean;
  splits?: Split[];
  store?: string;
  storePaymentMethodMode?: StorePaymentMethodMode2;
  telephoneNumber?: string;
  themeId?: string;
  threeDs2RequestData?: CheckoutSessionThreeDs2RequestData3;
};

export const paymentLinkRequestSchema: Schema<PaymentLinkRequest> = s.object<PaymentLinkRequest>({
  allowedPaymentMethods: s.optional(s.array(s.string())),
  amount: amount35Schema,
  applicationInfo: s.optional(s.lazy(() => applicationInfoSchema)),
  billingAddress: s.optional(s.lazy(() => address3Schema)),
  blockedPaymentMethods: s.optional(s.array(s.string())),
  captureDelayHours: s.optional(s.number()),
  countryCode: s.optional(s.string()),
  dateOfBirth: s.optional(s.dateOnly()),
  deliverAt: s.optional(s.dateTime()),
  deliveryAddress: s.optional(s.lazy(() => address2Schema)),
  description: s.optional(s.string()),
  expiresAt: s.optional(s.dateTime()),
  fundOrigin: s.optional(s.lazy(() => fundOrigin1Schema)),
  fundRecipient: s.optional(s.lazy(() => fundRecipient1Schema)),
  installmentOptions: s.optional(
    s.record(
      s.string(),
      s.lazy(() => installmentOptionSchema),
    ),
  ),
  lineItems: s.optional(s.array(s.lazy(() => lineItemSchema))),
  manualCapture: s.optional(s.boolean()),
  mcc: s.optional(s.string()),
  merchantAccount: s.string(),
  merchantOrderReference: s.optional(s.string()),
  metadata: s.optional(s.record(s.string(), s.string())),
  platformChargebackLogic: s.optional(s.lazy(() => platformChargebackLogic4Schema)),
  recurringProcessingModel: s.optional(s.lazy(() => recurringProcessingModel4Schema)),
  reference: s.string(),
  requiredShopperFields: s.optional(s.array(s.lazy(() => requiredShopperFieldSchema))),
  returnUrl: s.optional(s.string()),
  reusable: s.optional(s.boolean()),
  riskData: s.optional(s.lazy(() => riskData1Schema)),
  shopperEmail: s.optional(s.string()),
  shopperLocale: s.optional(s.string()),
  shopperName: s.optional(s.lazy(() => name4Schema)),
  shopperReference: s.optional(s.string()),
  shopperStatement: s.optional(s.string()),
  showRemovePaymentMethodButton: s.optional(s.boolean()),
  socialSecurityNumber: s.optional(s.string()),
  splitCardFundingSources: s.optional(s.boolean()),
  splits: s.optional(s.array(s.lazy(() => splitSchema))),
  store: s.optional(s.string()),
  storePaymentMethodMode: s.optional(s.lazy(() => storePaymentMethodMode2Schema)),
  telephoneNumber: s.optional(s.string()),
  themeId: s.optional(s.string()),
  threeDs2RequestData: s.optional(s.lazy(() => checkoutSessionThreeDs2RequestData3Schema)),
  _keysMap: {
    threeDs2RequestData: "threeDS2RequestData",
  },
});
