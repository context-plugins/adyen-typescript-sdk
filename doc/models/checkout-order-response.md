
# Checkout Order Response

*This model accepts additional fields of type unknown.*

## Structure

`CheckoutOrderResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount16 \| undefined`](../../doc/models/amount-16.md) | Optional | - |
| `expiresAt` | `string \| undefined` | Optional | The expiry date for the order. |
| `orderData` | `string \| undefined` | Optional | The encrypted order data. |
| `pspReference` | `string` | Required | The `pspReference` that belongs to the order. |
| `reference` | `string \| undefined` | Optional | The merchant reference for the order. |
| `remainingAmount` | [`RemainingAmount \| undefined`](../../doc/models/remaining-amount.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CheckoutOrderResponse } from 'adyen';

const checkoutOrderResponse: CheckoutOrderResponse = {
  pspReference: 'pspReference8',
  amount: {
    currency: 'currency2',
    value: BigInt(110),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  expiresAt: 'expiresAt6',
  orderData: 'orderData8',
  reference: 'reference4',
  remainingAmount: {
    currency: 'currency6',
    value: BigInt(156),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

