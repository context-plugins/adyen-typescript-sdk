
# Create Order Response

## Structure

`CreateOrderResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `additionalData` | `Record<string, string> \| undefined` | Optional | Contains additional information about the payment. Some data fields are included only if you select them first: Go to **Customer Area** > **Developers** > **Additional data**. |
| `amount` | [`Amount12`](../../doc/models/amount-12.md) | Required | The initial amount of the order. |
| `expiresAt` | `string` | Required | The date that the order will expire. |
| `fraudResult` | [`FraudResult1 \| undefined`](../../doc/models/fraud-result-1.md) | Optional | The fraud result properties of the payment. |
| `orderData` | `string` | Required | The encrypted data that will be used by merchant for adding payments to the order. |
| `pspReference` | `string \| undefined` | Optional | Adyen's 16-character reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request. |
| `reference` | `string \| undefined` | Optional | The reference provided by merchant for creating the order. |
| `refusalReason` | `string \| undefined` | Optional | If the payment's authorisation is refused or an error occurs during authorisation, this field holds Adyen's mapped reason for the refusal or a description of the error. When a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.<br><br>For more information, see [Refusal reasons](https://docs.adyen.com/development-resources/refusal-reasons). |
| `remainingAmount` | [`Amount23`](../../doc/models/amount-23.md) | Required | The remaining amount in the order. |
| `resultCode` | `string` | Required, Constant | The result of the order creation request.<br>The value is always **Success**.<br><br>**Value**: `'Success'` |

## Example

```ts
import { CreateOrderResponse } from 'adyen';

const createOrderResponse: CreateOrderResponse = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
  expiresAt: 'expiresAt0',
  orderData: 'orderData4',
  remainingAmount: {
    currency: 'currency6',
    value: BigInt(156),
  },
  resultCode: 'Success',
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
      },
      {
        accountScore: 102,
        checkId: 246,
        name: 'name6',
      }
    ],
  },
  pspReference: 'pspReference6',
  reference: 'reference0',
  refusalReason: 'refusalReason4',
};
```

