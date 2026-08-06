
# Payment

*This model accepts additional fields of type unknown.*

## Structure

`Payment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount16 \| undefined`](../../doc/models/amount-16.md) | Optional | - |
| `paymentMethod` | [`PaymentResponse8 \| undefined`](../../doc/models/payment-response-8.md) | Optional | - |
| `pspReference` | `string \| undefined` | Optional | Adyen's 16-character reference associated with the transaction/request. This value is globally unique. Use this reference when you communicate with us about this request. |
| `resultCode` | [`ResultCode2 \| undefined`](../../doc/models/result-code-2.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Payment, ResultCode2 } from 'adyen';

const payment: Payment = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  paymentMethod: {
    brand: 'brand6',
    type: 'type8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  pspReference: 'pspReference2',
  resultCode: ResultCode2.Authorised,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

