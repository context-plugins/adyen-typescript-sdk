
# Checkout Order Response 1

Contains updated information regarding the order in case order information was provided in the request.

*This model accepts additional fields of type unknown.*

## Structure

`CheckoutOrderResponse1`

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
import { CheckoutOrderResponse1 } from 'adyen';

const checkoutOrderResponse1: CheckoutOrderResponse1 = {
  pspReference: 'pspReference0',
  amount: {
    currency: 'currency2',
    value: BigInt(110),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  expiresAt: 'expiresAt4',
  orderData: 'orderData0',
  reference: 'reference6',
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

