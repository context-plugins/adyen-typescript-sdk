
# Checkout Order Response

## Structure

`CheckoutOrderResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount12 \| undefined`](../../doc/models/amount-12.md) | Optional | The initial amount of the order. |
| `expiresAt` | `string \| undefined` | Optional | The expiry date for the order. |
| `orderData` | `string \| undefined` | Optional | The encrypted order data. |
| `pspReference` | `string` | Required | The `pspReference` that belongs to the order. |
| `reference` | `string \| undefined` | Optional | The merchant reference for the order. |
| `remainingAmount` | [`Amount13 \| undefined`](../../doc/models/amount-13.md) | Optional | The updated remaining amount. |

## Example

```ts
import { CheckoutOrderResponse } from 'adyen';

const checkoutOrderResponse: CheckoutOrderResponse = {
  pspReference: 'pspReference8',
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
  expiresAt: 'expiresAt6',
  orderData: 'orderData8',
  reference: 'reference4',
  remainingAmount: {
    currency: 'currency6',
    value: BigInt(156),
  },
};
```

