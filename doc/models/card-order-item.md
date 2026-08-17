
# Card Order Item

## Structure

`CardOrderItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balancePlatform` | `string \| undefined` | Optional | The unique identifier of the balance platform. |
| `card` | [`CardOrderItemDeliveryStatus3 \| undefined`](../../doc/models/card-order-item-delivery-status-3.md) | Optional | The status of the card delivery.<br><br>Possible values: **created**, **rejected**, **processing**, **produced**, **shipped**, **delivered**, **notApplicable**, **unknown**. |
| `cardOrderItemId` | `string \| undefined` | Optional | The unique identifier of the card order item. |
| `creationDate` | `string \| undefined` | Optional | The date and time when the event was triggered, in ISO 8601 extended format. For example, **2025-03-19T10:15:30+01:00**. |
| `id` | `string \| undefined` | Optional, Read-only | The ID of the resource. |
| `paymentInstrumentId` | `string \| undefined` | Optional | The unique identifier of the payment instrument related to the card order item. |
| `pin` | [`CardOrderItemDeliveryStatus1 \| undefined`](../../doc/models/card-order-item-delivery-status-1.md) | Optional | Contains information about the status of the PIN delivery. |
| `shippingMethod` | `string \| undefined` | Optional | The shipping method used to deliver the card or the PIN. |

## Example

```ts
import { CardOrderItem, Status71Enum } from 'adyen';

const cardOrderItem: CardOrderItem = {
  balancePlatform: 'balancePlatform4',
  card: {
    errorMessage: 'errorMessage4',
    status: Status71Enum.Shipped,
    trackingNumber: 'trackingNumber4',
  },
  cardOrderItemId: 'cardOrderItemId8',
  creationDate: '2016-03-13T12:52:32.123Z',
};
```

