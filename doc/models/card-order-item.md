
# Card Order Item

*This model accepts additional fields of type unknown.*

## Structure

`CardOrderItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balancePlatform` | `string \| undefined` | Optional | The unique identifier of the balance platform. |
| `card` | [`CardOrderItemDeliveryStatus \| undefined`](../../doc/models/card-order-item-delivery-status.md) | Optional | - |
| `cardOrderItemId` | `string \| undefined` | Optional | The unique identifier of the card order item. |
| `creationDate` | `string \| undefined` | Optional | The date and time when the event was triggered, in ISO 8601 extended format. For example, **2025-03-19T10:15:30+01:00**. |
| `id` | `string \| undefined` | Optional, Read-only | The ID of the resource. |
| `paymentInstrumentId` | `string \| undefined` | Optional | The unique identifier of the payment instrument related to the card order item. |
| `pin` | [`CardOrderItemDeliveryStatus \| undefined`](../../doc/models/card-order-item-delivery-status.md) | Optional | - |
| `shippingMethod` | `string \| undefined` | Optional | The shipping method used to deliver the card or the PIN. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CardOrderItem, Status7 } from 'adyenlib';

const cardOrderItem: CardOrderItem = {
  balancePlatform: 'balancePlatform4',
  card: {
    errorMessage: 'errorMessage4',
    status: Status7.Shipped,
    trackingNumber: 'trackingNumber4',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  cardOrderItemId: 'cardOrderItemId8',
  creationDate: '2016-03-13T12:52:32.123Z',
  id: 'id2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

