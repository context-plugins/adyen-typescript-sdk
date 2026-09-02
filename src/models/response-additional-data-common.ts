import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fraudResultTypeSchema, type FraudResultType } from "./fraud-result-type.js";
import { fraudRiskLevelSchema, type FraudRiskLevel } from "./fraud-risk-level.js";
import {
  recurringProcessingModel7Schema,
  type RecurringProcessingModel7,
} from "./recurring-processing-model7.js";
import {
  tokenizationStoreOperationTypeSchema,
  type TokenizationStoreOperationType,
} from "./tokenization-store-operation-type.js";

export type ResponseAdditionalDataCommon = {
  acquirerAccountCode?: string;
  acquirerCode?: string;
  acquirerReference?: string;
  alias?: string;
  aliasType?: string;
  authCode?: string;
  authorisationMid?: string;
  authorisedAmountCurrency?: string;
  authorisedAmountValue?: string;
  avsResult?: string;
  avsResultRaw?: string;
  bic?: string;
  coBrandedWith?: string;
  cvcResult?: string;
  cvcResultRaw?: string;
  dsTransId?: string;
  eci?: string;
  expiryDate?: string;
  extraCostsCurrency?: string;
  extraCostsValue?: string;
  fraudCheckItemNrFraudCheckname?: string;
  fraudManualReview?: string;
  fraudResultType?: FraudResultType;
  fraudRiskLevel?: FraudRiskLevel;
  fundingSource?: string;
  fundsAvailability?: string;
  inferredRefusalReason?: string;
  isCardCommercial?: string;
  issuerCountry?: string;
  liabilityShift?: string;
  mcBankNetReferenceNumber?: string;
  merchantAdviceCode?: string;
  merchantReference?: string;
  networkProcessingMode?: string;
  networkTxReference?: string;
  ownerName?: string;
  paymentAccountReference?: string;
  paymentMethod?: string;
  paymentMethodVariant?: string;
  payoutEligible?: string;
  realtimeAccountUpdaterStatus?: string;
  receiptFreeText?: string;
  recurringContractTypes?: string;
  recurringFirstPspReference?: string;
  recurringRecurringDetailReference?: string;
  recurringShopperReference?: string;
  recurringProcessingModel?: RecurringProcessingModel7;
  referred?: string;
  refusalReasonRaw?: string;
  requestAmount?: string;
  requestCurrencyCode?: string;
  shopperInteraction?: string;
  shopperReference?: string;
  terminalId?: string;
  threeDAuthenticated?: string;
  threeDAuthenticatedResponse?: string;
  threeDOffered?: string;
  threeDOfferedResponse?: string;
  threeDsVersion?: string;
  tokenizationShopperReference?: string;
  tokenizationStoreOperationType?: TokenizationStoreOperationType;
  tokenizationStoredPaymentMethodId?: string;
  transactionLinkId?: string;
  visaTransactionId?: string;
  xid?: string;
};

export const responseAdditionalDataCommonSchema: Schema<ResponseAdditionalDataCommon> =
  s.object<ResponseAdditionalDataCommon>({
    acquirerAccountCode: s.optional(s.string()),
    acquirerCode: s.optional(s.string()),
    acquirerReference: s.optional(s.string()),
    alias: s.optional(s.string()),
    aliasType: s.optional(s.string()),
    authCode: s.optional(s.string()),
    authorisationMid: s.optional(s.string()),
    authorisedAmountCurrency: s.optional(s.string()),
    authorisedAmountValue: s.optional(s.string()),
    avsResult: s.optional(s.string()),
    avsResultRaw: s.optional(s.string()),
    bic: s.optional(s.string()),
    coBrandedWith: s.optional(s.string()),
    cvcResult: s.optional(s.string()),
    cvcResultRaw: s.optional(s.string()),
    dsTransId: s.optional(s.string()),
    eci: s.optional(s.string()),
    expiryDate: s.optional(s.string()),
    extraCostsCurrency: s.optional(s.string()),
    extraCostsValue: s.optional(s.string()),
    fraudCheckItemNrFraudCheckname: s.optional(s.string()),
    fraudManualReview: s.optional(s.string()),
    fraudResultType: s.optional(s.lazy(() => fraudResultTypeSchema)),
    fraudRiskLevel: s.optional(s.lazy(() => fraudRiskLevelSchema)),
    fundingSource: s.optional(s.string()),
    fundsAvailability: s.optional(s.string()),
    inferredRefusalReason: s.optional(s.string()),
    isCardCommercial: s.optional(s.string()),
    issuerCountry: s.optional(s.string()),
    liabilityShift: s.optional(s.string()),
    mcBankNetReferenceNumber: s.optional(s.string()),
    merchantAdviceCode: s.optional(s.string()),
    merchantReference: s.optional(s.string()),
    networkProcessingMode: s.optional(s.string()),
    networkTxReference: s.optional(s.string()),
    ownerName: s.optional(s.string()),
    paymentAccountReference: s.optional(s.string()),
    paymentMethod: s.optional(s.string()),
    paymentMethodVariant: s.optional(s.string()),
    payoutEligible: s.optional(s.string()),
    realtimeAccountUpdaterStatus: s.optional(s.string()),
    receiptFreeText: s.optional(s.string()),
    recurringContractTypes: s.optional(s.string()),
    recurringFirstPspReference: s.optional(s.string()),
    recurringRecurringDetailReference: s.optional(s.string()),
    recurringShopperReference: s.optional(s.string()),
    recurringProcessingModel: s.optional(s.lazy(() => recurringProcessingModel7Schema)),
    referred: s.optional(s.string()),
    refusalReasonRaw: s.optional(s.string()),
    requestAmount: s.optional(s.string()),
    requestCurrencyCode: s.optional(s.string()),
    shopperInteraction: s.optional(s.string()),
    shopperReference: s.optional(s.string()),
    terminalId: s.optional(s.string()),
    threeDAuthenticated: s.optional(s.string()),
    threeDAuthenticatedResponse: s.optional(s.string()),
    threeDOffered: s.optional(s.string()),
    threeDOfferedResponse: s.optional(s.string()),
    threeDsVersion: s.optional(s.string()),
    tokenizationShopperReference: s.optional(s.string()),
    tokenizationStoreOperationType: s.optional(s.lazy(() => tokenizationStoreOperationTypeSchema)),
    tokenizationStoredPaymentMethodId: s.optional(s.string()),
    transactionLinkId: s.optional(s.string()),
    visaTransactionId: s.optional(s.string()),
    xid: s.optional(s.string()),
    _keysMap: {
      dsTransId: "dsTransID",
      fraudCheckItemNrFraudCheckname: "fraudCheck-[itemNr]-[FraudCheckname]",
      recurringContractTypes: "recurring.contractTypes",
      recurringFirstPspReference: "recurring.firstPspReference",
      recurringRecurringDetailReference: "recurring.recurringDetailReference",
      recurringShopperReference: "recurring.shopperReference",
      threeDsVersion: "threeDSVersion",
      tokenizationShopperReference: "tokenization.shopperReference",
      tokenizationStoreOperationType: "tokenization.store.operationType",
      tokenizationStoredPaymentMethodId: "tokenization.storedPaymentMethodId",
    },
  });
