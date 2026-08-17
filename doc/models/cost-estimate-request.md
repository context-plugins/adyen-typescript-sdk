
# Cost Estimate Request

## Structure

`CostEstimateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount`](../../doc/models/amount.md) | Required | The transaction amount used as a base for the cost estimation. |
| `assumptions` | [`CostEstimateAssumptions1 \| undefined`](../../doc/models/cost-estimate-assumptions-1.md) | Optional | Assumptions made for the expected characteristics of the transaction, for which the charges are being estimated. |
| `cardNumber` | `string \| undefined` | Optional | The card number (4-19 characters) for PCI compliant use cases. Do not use any separators.<br><br>> Either the `cardNumber` or `encryptedCardNumber` field must be provided in a payment request.<br><br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `19` |
| `encryptedCardNumber` | `string \| undefined` | Optional | Encrypted data that stores card information for non PCI-compliant use cases. The encrypted data must be created with the Checkout Card Component or Secured Fields Component, and must contain the `encryptedCardNumber` field.<br><br>> Either the `cardNumber` or `encryptedCardNumber` field must be provided in a payment request. |
| `merchantAccount` | `string` | Required | The merchant account identifier you want to process the (transaction) request with. |
| `merchantDetails` | [`MerchantDetails2 \| undefined`](../../doc/models/merchant-details-2.md) | Optional | Additional data for merchants who don't use Adyen as the payment authorisation gateway. |
| `recurring` | [`Recurring \| undefined`](../../doc/models/recurring.md) | Optional | The recurring settings for the payment. Use this property when you want to enable [recurring payments](https://docs.adyen.com/online-payments/tokenization). |
| `selectedRecurringDetailReference` | `string \| undefined` | Optional | The `recurringDetailReference` you want to use for this cost estimate. The value `LATEST` can be used to select the most recently stored recurring detail. |
| `shopperInteraction` | [`ShopperInteractionEnum \| undefined`](../../doc/models/shopper-interaction-enum.md) | Optional | Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.<br>For the web service API, Adyen assumes Ecommerce shopper interaction by default.<br><br>This field has the following possible values:<br><br>* `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.<br>* `ContAuth` - Card on file and/or subscription transactions, where the card holder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).<br>* `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.<br>* `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal. |
| `shopperReference` | `string \| undefined` | Optional | Required for recurring payments.<br>Your reference to uniquely identify this shopper, for example user ID or account ID. The value is case-sensitive and must be at least three characters.<br><br>> Your reference must not include personally identifiable information (PII) such as name or email address. |

## Example

```ts
import { ContractEnum, CostEstimateRequest, TokenServiceEnum } from 'adyen';

const costEstimateRequest: CostEstimateRequest = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
  merchantAccount: 'merchantAccount0',
  assumptions: {
    assume3DSecureAuthenticated: false,
    assumeLevel3Data: false,
    installments: 20,
  },
  cardNumber: 'cardNumber4',
  encryptedCardNumber: 'encryptedCardNumber4',
  merchantDetails: {
    countryCode: 'countryCode8',
    enrolledIn3DSecure: false,
    mcc: 'mcc6',
  },
  recurring: {
    contract: ContractEnum.EnumONECLICKRECURRING,
    recurringDetailName: 'recurringDetailName2',
    recurringExpiry: '2016-03-13T12:52:32.123Z',
    recurringFrequency: 'recurringFrequency0',
    tokenService: TokenServiceEnum.VISATOKENSERVICE,
  },
};
```

