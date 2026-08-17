
# Card Order Item Delivery Status 3

The status of the card delivery.

Possible values: **created**, **rejected**, **processing**, **produced**, **shipped**, **delivered**, **notApplicable**, **unknown**.

## Structure

`CardOrderItemDeliveryStatus3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errorMessage` | `string \| undefined` | Optional | An error message. |
| `status` | [`Status71Enum \| undefined`](../../doc/models/status-71-enum.md) | Optional | The status of the PIN delivery. |
| `trackingNumber` | `string \| undefined` | Optional | The tracking number of the PIN delivery. |

## Example

```ts
import { CardOrderItemDeliveryStatus3, Status71Enum } from 'adyen';

const cardOrderItemDeliveryStatus3: CardOrderItemDeliveryStatus3 = {
  errorMessage: 'errorMessage2',
  status: Status71Enum.Created,
  trackingNumber: 'trackingNumber2',
};
```

