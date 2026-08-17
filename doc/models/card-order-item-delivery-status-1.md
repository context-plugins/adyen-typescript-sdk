
# Card Order Item Delivery Status 1

Contains information about the status of the PIN delivery.

## Structure

`CardOrderItemDeliveryStatus1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errorMessage` | `string \| undefined` | Optional | An error message. |
| `status` | [`Status71Enum \| undefined`](../../doc/models/status-71-enum.md) | Optional | The status of the PIN delivery. |
| `trackingNumber` | `string \| undefined` | Optional | The tracking number of the PIN delivery. |

## Example

```ts
import { CardOrderItemDeliveryStatus1, Status71Enum } from 'adyen';

const cardOrderItemDeliveryStatus1: CardOrderItemDeliveryStatus1 = {
  errorMessage: 'errorMessage0',
  status: Status71Enum.Created,
  trackingNumber: 'trackingNumber0',
};
```

