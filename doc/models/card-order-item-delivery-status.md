
# Card Order Item Delivery Status

## Structure

`CardOrderItemDeliveryStatus`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errorMessage` | `string \| undefined` | Optional | An error message. |
| `status` | [`Status71Enum \| undefined`](../../doc/models/status-71-enum.md) | Optional | The status of the PIN delivery. |
| `trackingNumber` | `string \| undefined` | Optional | The tracking number of the PIN delivery. |

## Example

```ts
import { CardOrderItemDeliveryStatus, Status71Enum } from 'adyen';

const cardOrderItemDeliveryStatus: CardOrderItemDeliveryStatus = {
  errorMessage: 'errorMessage2',
  status: Status71Enum.Shipped,
  trackingNumber: 'trackingNumber2',
};
```

