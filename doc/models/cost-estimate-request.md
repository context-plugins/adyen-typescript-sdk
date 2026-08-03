
# Cost Estimate Request

*This model accepts additional fields of type unknown.*

## Structure

`CostEstimateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount16`](../../doc/models/amount-16.md) | Required | - |
| `assumptions` | [`CostEstimateAssumptions \| undefined`](../../doc/models/cost-estimate-assumptions.md) | Optional | - |
| `cardNumber` | `string \| undefined` | Optional | The card number (4-19 characters) for PCI compliant use cases. Do not use any separators.<br><br>> Either the `cardNumber` or `encryptedCardNumber` field must be provided in a payment request.<br><br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `19` |
| `encryptedCardNumber` | `string \| undefined` | Optional | Encrypted data that stores card information for non PCI-compliant use cases. The encrypted data must be created with the Checkout Card Component or Secured Fields Component, and must contain the `encryptedCardNumber` field.<br><br>> Either the `cardNumber` or `encryptedCardNumber` field must be provided in a payment request. |
| `merchantAccount` | `string` | Required | The merchant account identifier you want to process the (transaction) request with. |
| `merchantDetails` | [`MerchantDetails \| undefined`](../../doc/models/merchant-details.md) | Optional | - |
| `recurring` | [`Recurring3 \| undefined`](../../doc/models/recurring-3.md) | Optional | - |
| `selectedRecurringDetailReference` | `string \| undefined` | Optional | The `recurringDetailReference` you want to use for this cost estimate. The value `LATEST` can be used to select the most recently stored recurring detail. |
| `shopperInteraction` | [`ShopperInteraction1 \| undefined`](../../doc/models/shopper-interaction-1.md) | Optional | - |
| `shopperReference` | `string \| undefined` | Optional | Required for recurring payments.<br>Your reference to uniquely identify this shopper, for example user ID or account ID. The value is case-sensitive and must be at least three characters.<br><br>> Your reference must not include personally identifiable information (PII) such as name or email address. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Contract, CostEstimateRequest, TokenService } from 'adyenlib';

const costEstimateRequest: CostEstimateRequest = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  merchantAccount: 'merchantAccount0',
  assumptions: {
    assume3DSecureAuthenticated: false,
    assumeLevel3Data: false,
    installments: 20,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  cardNumber: 'cardNumber4',
  encryptedCardNumber: 'encryptedCardNumber4',
  merchantDetails: {
    countryCode: 'countryCode8',
    enrolledIn3DSecure: false,
    mcc: 'mcc6',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  recurring: {
    contract: Contract.EnumOneclickrecurring,
    recurringDetailName: 'recurringDetailName2',
    recurringExpiry: '2016-03-13T12:52:32.123Z',
    recurringFrequency: 'recurringFrequency0',
    tokenService: TokenService.Visatokenservice,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

