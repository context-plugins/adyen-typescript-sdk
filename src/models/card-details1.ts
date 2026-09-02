import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fundingSourceSchema, type FundingSource } from "./funding-source.js";
import { type14Schema, type Type14 } from "./type14.js";

export type CardDetails1 = {
  billingSequenceNumber?: string;
  brand?: string;
  checkoutAttemptId?: string;
  cupsecureplusSmscode?: string;
  cvc?: string;
  encryptedCard?: string;
  encryptedCardNumber?: string;
  encryptedExpiryMonth?: string;
  encryptedExpiryYear?: string;
  encryptedPassword?: string;
  encryptedSecurityCode?: string;
  expiryMonth?: string;
  expiryYear?: string;
  fastlaneData?: string;
  fundingSource?: FundingSource;
  holderName?: string;
  networkPaymentReference?: string;
  number?: string;
  recurringDetailReference?: string;
  sdkData?: string;
  shopperNotificationReference?: string;
  srcCorrelationId?: string;
  srcDigitalCardId?: string;
  srcScheme?: string;
  srcTokenReference?: string;
  storedPaymentMethodId?: string;
  threeDs2SdkVersion?: string;
  type?: Type14;
};

export const cardDetails1Schema: Schema<CardDetails1> = s.object<CardDetails1>({
  billingSequenceNumber: s.optional(s.string()),
  brand: s.optional(s.string()),
  checkoutAttemptId: s.optional(s.string()),
  cupsecureplusSmscode: s.optional(s.string()),
  cvc: s.optional(s.string()),
  encryptedCard: s.optional(s.string()),
  encryptedCardNumber: s.optional(s.string()),
  encryptedExpiryMonth: s.optional(s.string()),
  encryptedExpiryYear: s.optional(s.string()),
  encryptedPassword: s.optional(s.string()),
  encryptedSecurityCode: s.optional(s.string()),
  expiryMonth: s.optional(s.string()),
  expiryYear: s.optional(s.string()),
  fastlaneData: s.optional(s.string()),
  fundingSource: s.optional(s.lazy(() => fundingSourceSchema)),
  holderName: s.optional(s.string()),
  networkPaymentReference: s.optional(s.string()),
  number: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  shopperNotificationReference: s.optional(s.string()),
  srcCorrelationId: s.optional(s.string()),
  srcDigitalCardId: s.optional(s.string()),
  srcScheme: s.optional(s.string()),
  srcTokenReference: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  threeDs2SdkVersion: s.optional(s.string()),
  type: s.optional(s.lazy(() => type14Schema)),
  _keysMap: {
    cupsecureplusSmscode: "cupsecureplus.smscode",
    threeDs2SdkVersion: "threeDS2SdkVersion",
  },
});
