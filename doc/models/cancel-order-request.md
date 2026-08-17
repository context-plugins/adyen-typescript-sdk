
# Cancel Order Request

## Structure

`CancelOrderRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantAccount` | `string` | Required | The merchant account identifier that orderData belongs to. |
| `order` | [`EncryptedOrderData4`](../../doc/models/encrypted-order-data-4.md) | Required | The order request object that contains a pspReference that represents the order and the matching encrypted order data. |

## Example

```ts
import { CancelOrderRequest } from 'adyen';

const cancelOrderRequest: CancelOrderRequest = {
  merchantAccount: 'merchantAccount4',
  order: {
    orderData: 'orderData8',
    pspReference: 'pspReference8',
  },
};
```

