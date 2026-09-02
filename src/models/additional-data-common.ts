import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { industryUsageSchema, type IndustryUsage } from "./industry-usage.js";

export type AdditionalDataCommon = {
  requestedTestAcquirerResponseCode?: string;
  requestedTestErrorResponseCode?: string;
  allowPartialAuth?: string;
  authorisationType?: string;
  autoRescue?: string;
  customRoutingFlag?: string;
  industryUsage?: IndustryUsage;
  manualCapture?: string;
  maxDaysToRescue?: string;
  networkTxReference?: string;
  overwriteBrand?: string;
  subMerchantCity?: string;
  subMerchantCountry?: string;
  subMerchantEmail?: string;
  subMerchantId?: string;
  subMerchantName?: string;
  subMerchantPhoneNumber?: string;
  subMerchantPostalCode?: string;
  subMerchantState?: string;
  subMerchantStreet?: string;
  subMerchantTaxId?: string;
  transactionLinkId?: string;
};

export const additionalDataCommonSchema: Schema<AdditionalDataCommon> = s.object<AdditionalDataCommon>({
  requestedTestAcquirerResponseCode: s.optional(s.string()),
  requestedTestErrorResponseCode: s.optional(s.string()),
  allowPartialAuth: s.optional(s.string()),
  authorisationType: s.optional(s.string()),
  autoRescue: s.optional(s.string()),
  customRoutingFlag: s.optional(s.string()),
  industryUsage: s.optional(s.lazy(() => industryUsageSchema)),
  manualCapture: s.optional(s.string()),
  maxDaysToRescue: s.optional(s.string()),
  networkTxReference: s.optional(s.string()),
  overwriteBrand: s.optional(s.string()),
  subMerchantCity: s.optional(s.string()),
  subMerchantCountry: s.optional(s.string()),
  subMerchantEmail: s.optional(s.string()),
  subMerchantId: s.optional(s.string()),
  subMerchantName: s.optional(s.string()),
  subMerchantPhoneNumber: s.optional(s.string()),
  subMerchantPostalCode: s.optional(s.string()),
  subMerchantState: s.optional(s.string()),
  subMerchantStreet: s.optional(s.string()),
  subMerchantTaxId: s.optional(s.string()),
  transactionLinkId: s.optional(s.string()),
  _keysMap: {
    requestedTestAcquirerResponseCode: "RequestedTestAcquirerResponseCode",
    requestedTestErrorResponseCode: "RequestedTestErrorResponseCode",
    subMerchantId: "subMerchantID",
  },
});
