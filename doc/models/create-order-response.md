
# Create Order Response

*This model accepts additional fields of type unknown.*

## Structure

`CreateOrderResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `additionalData` | `Record<string, string> \| undefined` | Optional | Contains additional information about the payment. Some data fields are included only if you select them first: Go to **Customer Area** > **Developers** > **Additional data**. |
| `amount` | [`Amount16`](../../doc/models/amount-16.md) | Required | - |
| `expiresAt` | `string` | Required | The date that the order will expire. |
| `fraudResult` | [`FraudResult \| undefined`](../../doc/models/fraud-result.md) | Optional | - |
| `orderData` | `string` | Required | The encrypted data that will be used by merchant for adding payments to the order. |
| `pspReference` | `string \| undefined` | Optional | Adyen's 16-character reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request. |
| `reference` | `string \| undefined` | Optional | The reference provided by merchant for creating the order. |
| `refusalReason` | `string \| undefined` | Optional | If the payment's authorisation is refused or an error occurs during authorisation, this field holds Adyen's mapped reason for the refusal or a description of the error. When a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.<br><br>For more information, see [Refusal reasons](https://docs.adyen.com/development-resources/refusal-reasons). |
| `remainingAmount` | [`RemainingAmount`](../../doc/models/remaining-amount.md) | Required | - |
| `resultCode` | [`ResultCode23`](../../doc/models/result-code-23.md) | Required | The result of the order creation request.<br>The value is always **Success**. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CreateOrderResponse, ResultCode23 } from 'adyen';

const createOrderResponse: CreateOrderResponse = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  expiresAt: 'expiresAt0',
  orderData: 'orderData4',
  remainingAmount: {
    currency: 'currency6',
    value: BigInt(156),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  resultCode: ResultCode23.Success,
  additionalData: {
    'key0': 'additionalData4'
  },
  fraudResult: {
    accountScore: 232,
    results: [
      {
        accountScore: 102,
        checkId: 246,
        name: 'name6',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      {
        accountScore: 102,
        checkId: 246,
        name: 'name6',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      }
    ],
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  pspReference: 'pspReference6',
  reference: 'reference0',
  refusalReason: 'refusalReason4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

