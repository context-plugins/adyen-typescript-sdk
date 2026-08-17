
# Response Additional Data Common 1

## Structure

`ResponseAdditionalDataCommon1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acquirerAccountCode` | `string \| undefined` | Optional | The name of the Adyen acquirer account.<br><br>Example: PayPalSandbox_TestAcquirer<br><br>> Only relevant for PayPal transactions. |
| `acquirerCode` | `string \| undefined` | Optional | The name of the acquirer processing the payment request.<br><br>Example: TestPmmAcquirer |
| `acquirerReference` | `string \| undefined` | Optional | The reference number that can be used for reconciliation in case a non-Adyen acquirer is used for settlement.<br><br>Example: 7C9N3FNBKT9 |
| `alias` | `string \| undefined` | Optional | The Adyen alias of the card.<br><br>Example: H167852639363479 |
| `aliasType` | `string \| undefined` | Optional | The type of the card alias.<br><br>Example: Default |
| `authCode` | `string \| undefined` | Optional | Authorisation code:<br><br>* When the payment is authorised successfully, this field holds the authorisation code for the payment.<br>* When the payment is not authorised, this field is empty.<br><br>Example: 58747 |
| `authorisationMid` | `string \| undefined` | Optional | Merchant ID known by the acquirer. |
| `authorisedAmountCurrency` | `string \| undefined` | Optional | The currency of the authorised amount, as a three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes). |
| `authorisedAmountValue` | `string \| undefined` | Optional | Value of the amount authorised.<br><br>This amount is represented in minor units according to the [following table](https://docs.adyen.com/development-resources/currency-codes). |
| `avsResult` | `string \| undefined` | Optional | The AVS result code of the payment, which provides information about the outcome of the AVS check.<br><br>For possible values, see [AVS](https://docs.adyen.com/risk-management/configure-standard-risk-rules/consistency-rules#billing-address-does-not-match-cardholder-address-avs). |
| `avsResultRaw` | `string \| undefined` | Optional | Raw AVS result received from the acquirer, where available.<br><br>Example: D |
| `bic` | `string \| undefined` | Optional | BIC of a bank account.<br><br>Example: TESTNL01<br><br>> Only relevant for SEPA Direct Debit transactions. |
| `coBrandedWith` | `string \| undefined` | Optional | Includes the co-branded card information. |
| `cvcResult` | `string \| undefined` | Optional | The result of CVC verification. |
| `cvcResultRaw` | `string \| undefined` | Optional | The raw result of CVC verification. |
| `dsTransID` | `string \| undefined` | Optional | Supported for 3D Secure 2. The unique transaction identifier assigned by the DS to identify a single transaction. |
| `eci` | `string \| undefined` | Optional | The Electronic Commerce Indicator returned from the schemes for the 3DS payment session.<br><br>Example: 02 |
| `expiryDate` | `string \| undefined` | Optional | The expiry date on the card.<br><br>Example: 6/2016<br><br>> Returned only in case of a card payment. |
| `extraCostsCurrency` | `string \| undefined` | Optional | The currency of the extra amount charged due to additional amounts set in the skin used in the HPP payment request.<br><br>Example: EUR |
| `extraCostsValue` | `string \| undefined` | Optional | The value of the extra amount charged due to additional amounts set in the skin used in the HPP payment request. The amount is in minor units. |
| `fraudCheckItemNrFraudCheckname` | `string \| undefined` | Optional | The fraud score due to a particular fraud check. The fraud check name is found in the key of the key-value pair. |
| `fraudManualReview` | `string \| undefined` | Optional | Indicates if the payment is sent to manual review. |
| `fraudResultType` | [`FraudResultTypeEnum \| undefined`](../../doc/models/fraud-result-type-enum.md) | Optional | The fraud result properties of the payment. Possible values:<br><br>* AMBER<br>* GREEN<br>* RED |
| `fraudRiskLevel` | [`FraudRiskLevelEnum \| undefined`](../../doc/models/fraud-risk-level-enum.md) | Optional | The risk level of the transaction as classified by the [machine learning](https://docs.adyen.com/risk-management/configure-your-risk-profile/machine-learning-rules/) fraud risk rule. The risk level indicates the likelihood that a transaction will result in a fraudulent dispute. Possible values:<br><br>* veryLow<br>* low<br>* medium<br>* high<br>* veryHigh |
| `fundingSource` | `string \| undefined` | Optional | Information regarding the funding type of the card. The possible return values are:<br><br>* CHARGE<br><br>* CREDIT<br><br>* DEBIT<br><br>* PREPAID<br><br>* PREPAID_RELOADABLE<br><br>* PREPAID_NONRELOADABLE<br><br>* DEFFERED_DEBIT<br><br>> This functionality requires additional configuration on Adyen's end. To enable it, contact the Support Team.<br><br>For receiving this field in the notification, enable **Include Funding Source** in **Notifications** > **Additional settings**. |
| `fundsAvailability` | `string \| undefined` | Optional | Indicates availability of funds.<br><br>Visa:<br><br>* "I" (fast funds are supported)<br>* "N" (otherwise)<br><br>Mastercard:<br><br>* "I" (product type is Prepaid or Debit, or issuing country is in CEE/HGEM list)<br>* "N" (otherwise)<br><br>> Returned when you verify a card BIN or estimate costs, and only if payoutEligible is "Y" or "D". |
| `inferredRefusalReason` | `string \| undefined` | Optional | Provides the more granular indication of why a transaction was refused. When a transaction fails with either "Refused", "Restricted Card", "Transaction Not Permitted", "Not supported" or "DeclinedNon Generic" refusalReason from the issuer, Adyen cross references its PSP-wide data for extra insight into the refusal reason. If an inferred refusal reason is available, the `inferredRefusalReason`, field is populated and the `refusalReason`, is set to "Not Supported".<br><br>Possible values:<br><br>* 3D Secure Mandated<br><br>* Closed Account<br><br>* ContAuth Not Supported<br><br>* CVC Mandated<br><br>* Ecommerce Not Allowed<br><br>* Crossborder Not Supported<br><br>* Card Updated<br><br>* Low Authrate Bin<br><br>* Non-reloadable prepaid card |
| `isCardCommercial` | `string \| undefined` | Optional | Indicates if the card is used for business purposes only. |
| `issuerCountry` | `string \| undefined` | Optional | The issuing country of the card based on the BIN list that Adyen maintains.<br><br>Example: JP |
| `liabilityShift` | `string \| undefined` | Optional | A Boolean value indicating whether a liability shift was offered for this payment. |
| `mcBankNetReferenceNumber` | `string \| undefined` | Optional | The `mcBankNetReferenceNumber`, is a minimum of six characters and a maximum of nine characters long.<br><br>> Contact Support Team to enable this field. |
| `merchantAdviceCode` | `string \| undefined` | Optional | The Merchant Advice Code (MAC) can be returned by Mastercard issuers for refused payments. If present, the MAC contains information about why the payment failed, and whether it can be retried.<br><br>For more information see [Mastercard Merchant Advice Codes](https://docs.adyen.com/development-resources/raw-acquirer-responses#mastercard-merchant-advice-codes). |
| `merchantReference` | `string \| undefined` | Optional | The reference provided for the transaction. |
| `networkProcessingMode` | `string \| undefined` | Optional | Indicates the processing flow.<br><br>Possible values:<br><br>* **sale**: You do not need to separately capture the funds, because capture happens automatically as part of the transaction.<br>* **auth**: If you have not [configured automatic capture for the transaction](https://docs.adyen.com/online-payments/capture#types-of-capture), you must manually capture the funds. |
| `networkTxReference` | `string \| undefined` | Optional | Returned in the response if you are not tokenizing with Adyen and are using the Merchant-initiated transactions (MIT) framework from Mastercard or Visa.<br><br>This contains either the Mastercard Trace ID or the Visa Transaction ID. |
| `ownerName` | `string \| undefined` | Optional | The owner name of a bank account.<br><br>Only relevant for SEPA Direct Debit transactions. |
| `paymentAccountReference` | `string \| undefined` | Optional | The Payment Account Reference (PAR) value links a network token with the underlying primary account number (PAN). The PAR value consists of 29 uppercase alphanumeric characters. |
| `paymentMethod` | `string \| undefined` | Optional | The payment method used in the transaction. |
| `paymentMethodVariant` | `string \| undefined` | Optional | The Adyen sub-variant of the payment method used for the payment request.<br><br>For more information, refer to [PaymentMethodVariant](https://docs.adyen.com/development-resources/paymentmethodvariant).<br><br>Example: mcpro |
| `payoutEligible` | `string \| undefined` | Optional | Indicates whether a payout is eligible or not for this card.<br><br>Visa:<br><br>* "Y"<br>* "N"<br><br>Mastercard:<br><br>* "Y" (domestic and cross-border)<br><br>* "D" (only domestic)<br><br>* "N" (no MoneySend)<br><br>* "U" (unknown) |
| `realtimeAccountUpdaterStatus` | `string \| undefined` | Optional | The response code from the Real Time Account Updater service.<br><br>Possible return values are:<br><br>* CardChanged<br><br>* CardExpiryChanged<br><br>* CloseAccount<br><br>* ContactCardAccountHolder |
| `receiptFreeText` | `string \| undefined` | Optional | Message to be displayed on the terminal. |
| `recurringContractTypes` | `string \| undefined` | Optional | The recurring contract types applicable to the transaction. |
| `recurringFirstPspReference` | `string \| undefined` | Optional | The `pspReference`, of the first recurring payment that created the recurring detail.<br><br>This functionality requires additional configuration on Adyen's end. To enable it, contact the Support Team. |
| `recurringRecurringDetailReference` | `string \| undefined` | Optional | The reference that uniquely identifies the recurring transaction. |
| `recurringShopperReference` | `string \| undefined` | Optional | The provided reference of the shopper for a recurring transaction. |
| `recurringProcessingModel` | [`RecurringProcessingModelEnum \| undefined`](../../doc/models/recurring-processing-model-enum.md) | Optional | The processing model used for the recurring transaction. |
| `referred` | `string \| undefined` | Optional | If the payment is referred, this field is set to true.<br><br>This field is unavailable if the payment is referred and is usually not returned with ecommerce transactions.<br><br>Example: true |
| `refusalReasonRaw` | `string \| undefined` | Optional | Raw refusal reason received from the acquirer, where available.<br><br>Example: AUTHORISED |
| `requestAmount` | `string \| undefined` | Optional | The amount of the payment request. |
| `requestCurrencyCode` | `string \| undefined` | Optional | The currency of the payment request. |
| `shopperInteraction` | `string \| undefined` | Optional | The shopper interaction type of the payment request.<br><br>Example: Ecommerce |
| `shopperReference` | `string \| undefined` | Optional | The shopperReference passed in the payment request.<br><br>Example: AdyenTestShopperXX |
| `terminalId` | `string \| undefined` | Optional | The terminal ID used in a point-of-sale payment.<br><br>Example: 06022622 |
| `threeDAuthenticated` | `string \| undefined` | Optional | A Boolean value indicating whether 3DS authentication was completed on this payment.<br><br>Example: true |
| `threeDAuthenticatedResponse` | `string \| undefined` | Optional | The raw 3DS authentication result from the card issuer.<br><br>Example: N |
| `threeDOffered` | `string \| undefined` | Optional | A Boolean value indicating whether 3DS was offered for this payment.<br><br>Example: true |
| `threeDOfferedResponse` | `string \| undefined` | Optional | The raw enrollment result from the 3DS directory services of the card schemes.<br><br>Example: Y |
| `threeDSVersion` | `string \| undefined` | Optional | The 3D Secure 2 version. |
| `tokenizationShopperReference` | `string \| undefined` | Optional | The reference for the shopper that you sent when tokenizing the payment details. |
| `tokenizationStoreOperationType` | [`TokenizationStoreOperationTypeEnum \| undefined`](../../doc/models/tokenization-store-operation-type-enum.md) | Optional | The operation performed on the token. Possible values:<br><br>* **created**: the token has been created.<br>* **updated**: the existing token has been updated.<br>* **alreadyExisting**: the details have already been stored. |
| `tokenizationStoredPaymentMethodId` | `string \| undefined` | Optional | The reference that uniquely identifies tokenized payment details. |
| `transactionLinkId` | `string \| undefined` | Optional | Returned in the response for Mastercard payments.<br><br>This contains the Mastercard Transaction Link Identifier (TLID). |
| `visaTransactionId` | `string \| undefined` | Optional | The `visaTransactionId`, has a fixed length of 15 numeric characters.<br><br>> Contact Support Team to enable this field. |
| `xid` | `string \| undefined` | Optional | The 3DS transaction ID of the 3DS session sent in notifications. The value is Base64-encoded and is returned for transactions with directoryResponse 'N' or 'Y'.<br><br>Example: ODgxNDc2MDg2MDExODk5MAAAAAA= |

## Example

```ts
import { ResponseAdditionalDataCommon1 } from 'adyen';

const responseAdditionalDataCommon1: ResponseAdditionalDataCommon1 = {
  acquirerAccountCode: 'acquirerAccountCode6',
  acquirerCode: 'acquirerCode0',
  acquirerReference: 'acquirerReference8',
  alias: 'alias0',
  aliasType: 'aliasType0',
  cvcResult: '1 Matches',
  cvcResultRaw: 'M',
};
```

