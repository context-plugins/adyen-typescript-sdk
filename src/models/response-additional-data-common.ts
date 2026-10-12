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
  /**
   * The name of the Adyen acquirer account.
   *
   * Example: PayPalSandbox_TestAcquirer
   *
   * > Only relevant for PayPal transactions.
   */
  acquirerAccountCode?: string;
  /**
   * The name of the acquirer processing the payment request.
   *
   * Example: TestPmmAcquirer
   */
  acquirerCode?: string;
  /**
   * The reference number that can be used for reconciliation in case a non-Adyen acquirer is used
   * for settlement.
   *
   * Example: 7C9N3FNBKT9
   */
  acquirerReference?: string;
  /**
   * The Adyen alias of the card.
   *
   * Example: H167852639363479
   */
  alias?: string;
  /**
   * The type of the card alias.
   *
   * Example: Default
   */
  aliasType?: string;
  /**
   * Authorisation code:
   * * When the payment is authorised successfully, this field holds the authorisation code for the
   *   payment.
   * * When the payment is not authorised, this field is empty.
   *
   * Example: 58747
   */
  authCode?: string;
  /** Merchant ID known by the acquirer. */
  authorisationMid?: string;
  /**
   * The currency of the authorised amount, as a three-character [ISO currency
   * code](https://docs.adyen.com/development-resources/currency-codes).
   */
  authorisedAmountCurrency?: string;
  /**
   * Value of the amount authorised.
   *
   * This amount is represented in minor units according to the [following
   * table](https://docs.adyen.com/development-resources/currency-codes).
   */
  authorisedAmountValue?: string;
  /**
   * The AVS result code of the payment, which provides information about the outcome of the AVS
   * check.
   *
   * For possible values, see
   * [AVS](https://docs.adyen.com/risk-management/configure-standard-risk-rules/consistency-rules#billing-address-does-not-match-cardholder-address-avs).
   */
  avsResult?: string;
  /**
   * Raw AVS result received from the acquirer, where available.
   *
   * Example: D
   */
  avsResultRaw?: string;
  /**
   * BIC of a bank account.
   *
   * Example: TESTNL01
   *
   * > Only relevant for SEPA Direct Debit transactions.
   */
  bic?: string;
  /** Includes the co-branded card information. */
  coBrandedWith?: string;
  /** The result of CVC verification. */
  cvcResult?: string;
  /** The raw result of CVC verification. */
  cvcResultRaw?: string;
  /**
   * Supported for 3D Secure 2. The unique transaction identifier assigned by the DS to identify a
   * single transaction.
   */
  dsTransId?: string;
  /**
   * The Electronic Commerce Indicator returned from the schemes for the 3DS payment session.
   *
   * Example: 02
   */
  eci?: string;
  /**
   * The expiry date on the card.
   *
   * Example: 6/2016
   *
   * > Returned only in case of a card payment.
   */
  expiryDate?: string;
  /**
   * The currency of the extra amount charged due to additional amounts set in the skin used in the
   * HPP payment request.
   *
   * Example: EUR
   */
  extraCostsCurrency?: string;
  /**
   * The value of the extra amount charged due to additional amounts set in the skin used in the HPP
   * payment request. The amount is in minor units.
   */
  extraCostsValue?: string;
  /**
   * The fraud score due to a particular fraud check. The fraud check name is found in the key of
   * the key-value pair.
   */
  fraudCheckItemNrFraudCheckname?: string;
  /** Indicates if the payment is sent to manual review. */
  fraudManualReview?: string;
  /**
   * The fraud result properties of the payment. Possible values:
   * * AMBER
   * * GREEN
   * * RED
   */
  fraudResultType?: FraudResultType;
  /**
   * The risk level of the transaction as classified by the [machine
   * learning](https://docs.adyen.com/risk-management/configure-your-risk-profile/machine-learning-rules/)
   * fraud risk rule. The risk level indicates the likelihood that a transaction will result in a
   * fraudulent dispute. Possible values:
   * * veryLow
   * * low
   * * medium
   * * high
   * * veryHigh
   */
  fraudRiskLevel?: FraudRiskLevel;
  /**
   * Information regarding the funding type of the card. The possible return values are:
   * * CHARGE
   * * CREDIT
   * * DEBIT
   * * PREPAID
   * * PREPAID_RELOADABLE
   *
   * * PREPAID_NONRELOADABLE
   * * DEFFERED_DEBIT
   *
   * > This functionality requires additional configuration on Adyen's end. To enable it, contact
   * the Support Team.
   *
   * For receiving this field in the notification, enable **Include Funding Source** in
   * **Notifications** > **Additional settings**.
   */
  fundingSource?: string;
  /**
   * Indicates availability of funds.
   *
   * Visa:
   * * "I" (fast funds are supported)
   * * "N" (otherwise)
   *
   * Mastercard:
   * * "I" (product type is Prepaid or Debit, or issuing country is in CEE/HGEM list)
   * * "N" (otherwise)
   *
   * > Returned when you verify a card BIN or estimate costs, and only if payoutEligible is "Y" or
   * "D".
   */
  fundsAvailability?: string;
  /**
   * Provides the more granular indication of why a transaction was refused. When a transaction
   * fails with either "Refused", "Restricted Card", "Transaction Not Permitted", "Not supported" or
   * "DeclinedNon Generic" refusalReason from the issuer, Adyen cross references its PSP-wide data
   * for extra insight into the refusal reason. If an inferred refusal reason is available, the
   * `inferredRefusalReason`, field is populated and the `refusalReason`, is set to "Not Supported".
   *
   * Possible values:
   *
   * * 3D Secure Mandated
   * * Closed Account
   * * ContAuth Not Supported
   * * CVC Mandated
   * * Ecommerce Not Allowed
   * * Crossborder Not Supported
   * * Card Updated
   *
   * * Low Authrate Bin
   * * Non-reloadable prepaid card
   */
  inferredRefusalReason?: string;
  /** Indicates if the card is used for business purposes only. */
  isCardCommercial?: string;
  /**
   * The issuing country of the card based on the BIN list that Adyen maintains.
   *
   * Example: JP
   */
  issuerCountry?: string;
  /** A Boolean value indicating whether a liability shift was offered for this payment. */
  liabilityShift?: string;
  /**
   * The `mcBankNetReferenceNumber`, is a minimum of six characters and a maximum of nine characters
   * long.
   *
   * > Contact Support Team to enable this field.
   */
  mcBankNetReferenceNumber?: string;
  /**
   * The Merchant Advice Code (MAC) can be returned by Mastercard issuers for refused payments. If
   * present, the MAC contains information about why the payment failed, and whether it can be
   * retried.
   *
   * For more information see [Mastercard Merchant Advice
   * Codes](https://docs.adyen.com/development-resources/raw-acquirer-responses#mastercard-merchant-advice-codes).
   */
  merchantAdviceCode?: string;
  /** The reference provided for the transaction. */
  merchantReference?: string;
  /**
   * Indicates the processing flow.
   *
   * Possible values:
   * * **sale**: You do not need to separately capture the funds, because capture happens
   *   automatically as part of the transaction.
   * * **auth**: If you have not [configured automatic capture for the
   *   transaction](https://docs.adyen.com/online-payments/capture#types-of-capture), you must
   *   manually capture the funds.
   */
  networkProcessingMode?: string;
  /**
   * Returned in the response if you are not tokenizing with Adyen and are using the
   * Merchant-initiated transactions (MIT) framework from Mastercard or Visa.
   *
   * This contains either the Mastercard Trace ID or the Visa Transaction ID.
   */
  networkTxReference?: string;
  /**
   * The owner name of a bank account.
   *
   * Only relevant for SEPA Direct Debit transactions.
   */
  ownerName?: string;
  /**
   * The Payment Account Reference (PAR) value links a network token with the underlying primary
   * account number (PAN). The PAR value consists of 29 uppercase alphanumeric characters.
   */
  paymentAccountReference?: string;
  /** The payment method used in the transaction. */
  paymentMethod?: string;
  /**
   * The Adyen sub-variant of the payment method used for the payment request.
   *
   * For more information, refer to
   * [PaymentMethodVariant](https://docs.adyen.com/development-resources/paymentmethodvariant).
   *
   * Example: mcpro
   */
  paymentMethodVariant?: string;
  /**
   * Indicates whether a payout is eligible or not for this card.
   *
   * Visa:
   * * "Y"
   * * "N"
   *
   * Mastercard:
   * * "Y" (domestic and cross-border)
   *
   * * "D" (only domestic)
   * * "N" (no MoneySend)
   * * "U" (unknown)
   */
  payoutEligible?: string;
  /**
   * The response code from the Real Time Account Updater service.
   *
   * Possible return values are:
   * * CardChanged
   * * CardExpiryChanged
   * * CloseAccount
   *
   * * ContactCardAccountHolder
   */
  realtimeAccountUpdaterStatus?: string;
  /** Message to be displayed on the terminal. */
  receiptFreeText?: string;
  /** The recurring contract types applicable to the transaction. */
  recurringContractTypes?: string;
  /**
   * The `pspReference`, of the first recurring payment that created the recurring detail.
   *
   * This functionality requires additional configuration on Adyen's end. To enable it, contact the
   * Support Team.
   */
  recurringFirstPspReference?: string;
  /**
   * The reference that uniquely identifies the recurring transaction.
   *
   * @deprecated
   */
  recurringRecurringDetailReference?: string;
  /**
   * The provided reference of the shopper for a recurring transaction.
   *
   * @deprecated
   */
  recurringShopperReference?: string;
  /** The processing model used for the recurring transaction. */
  recurringProcessingModel?: RecurringProcessingModel7;
  /**
   * If the payment is referred, this field is set to true.
   *
   * This field is unavailable if the payment is referred and is usually not returned with ecommerce
   * transactions.
   *
   * Example: true
   */
  referred?: string;
  /**
   * Raw refusal reason received from the acquirer, where available.
   *
   * Example: AUTHORISED
   */
  refusalReasonRaw?: string;
  /** The amount of the payment request. */
  requestAmount?: string;
  /** The currency of the payment request. */
  requestCurrencyCode?: string;
  /**
   * The shopper interaction type of the payment request.
   *
   * Example: Ecommerce
   */
  shopperInteraction?: string;
  /**
   * The shopperReference passed in the payment request.
   *
   * Example: AdyenTestShopperXX
   */
  shopperReference?: string;
  /**
   * The terminal ID used in a point-of-sale payment.
   *
   * Example: 06022622
   */
  terminalId?: string;
  /**
   * A Boolean value indicating whether 3DS authentication was completed on this payment.
   *
   * Example: true
   */
  threeDAuthenticated?: string;
  /**
   * The raw 3DS authentication result from the card issuer.
   *
   * Example: N
   */
  threeDAuthenticatedResponse?: string;
  /**
   * A Boolean value indicating whether 3DS was offered for this payment.
   *
   * Example: true
   */
  threeDOffered?: string;
  /**
   * The raw enrollment result from the 3DS directory services of the card schemes.
   *
   * Example: Y
   */
  threeDOfferedResponse?: string;
  /** The 3D Secure 2 version. */
  threeDsVersion?: string;
  /** The reference for the shopper that you sent when tokenizing the payment details. */
  tokenizationShopperReference?: string;
  /**
   * The operation performed on the token. Possible values:
   *
   * * **created**: the token has been created.
   * * **updated**: the existing token has been updated.
   * * **alreadyExisting**: the details have already been stored.
   */
  tokenizationStoreOperationType?: TokenizationStoreOperationType;
  /** The reference that uniquely identifies tokenized payment details. */
  tokenizationStoredPaymentMethodId?: string;
  /**
   * Returned in the response for Mastercard payments.
   *
   * This contains the Mastercard Transaction Link Identifier (TLID).
   */
  transactionLinkId?: string;
  /**
   * The `visaTransactionId`, has a fixed length of 15 numeric characters.
   *
   * > Contact Support Team to enable this field.
   */
  visaTransactionId?: string;
  /**
   * The 3DS transaction ID of the 3DS session sent in notifications. The value is Base64-encoded
   * and is returned for transactions with directoryResponse 'N' or 'Y'.
   *
   * Example: ODgxNDc2MDg2MDExODk5MAAAAAA=
   */
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
