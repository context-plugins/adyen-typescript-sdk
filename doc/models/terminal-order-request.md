
# Terminal Order Request

## Structure

`TerminalOrderRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `billingEntityId` | `string \| undefined` | Optional | The identification of the billing entity to use for the order.<br><br>> When ordering products in Brazil, you do not need to include the `billingEntityId` in the request. |
| `customerOrderReference` | `string \| undefined` | Optional | The merchant-defined purchase order reference. |
| `items` | [`OrderItem[] \| undefined`](../../doc/models/order-item.md) | Optional | The products included in the order. |
| `orderType` | `string \| undefined` | Optional | Type of order |
| `shippingLocationId` | `string \| undefined` | Optional | The identification of the shipping location to use for the order. |
| `taxId` | `string \| undefined` | Optional | The tax number of the billing entity. |

## Example

```ts
import { TerminalOrderRequest } from 'adyen';

const terminalOrderRequest: TerminalOrderRequest = {
  billingEntityId: 'billingEntityId8',
  customerOrderReference: 'customerOrderReference0',
  items: [
    {
      id: 'id8',
      installments: BigInt(204),
      name: 'name8',
      quantity: 22,
    }
  ],
  orderType: 'orderType6',
  shippingLocationId: 'shippingLocationId6',
};
```

