
# Checkout Order Response 1

Contains updated information regarding the order in case order information was provided in the request.

## Structure

`CheckoutOrderResponse1`

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
import { CheckoutOrderResponse1 } from 'adyen';

const checkoutOrderResponse1: CheckoutOrderResponse1 = {
  pspReference: 'pspReference0',
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
  expiresAt: 'expiresAt4',
  orderData: 'orderData0',
  reference: 'reference6',
  remainingAmount: {
    currency: 'currency6',
    value: BigInt(156),
  },
};
```

