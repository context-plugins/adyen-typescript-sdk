
# Card Order Item Delivery Status

*This model accepts additional fields of type unknown.*

## Structure

`CardOrderItemDeliveryStatus`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errorMessage` | `string \| undefined` | Optional | An error message. |
| `status` | [`Status7 \| undefined`](../../doc/models/status-7.md) | Optional | - |
| `trackingNumber` | `string \| undefined` | Optional | The tracking number of the PIN delivery. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CardOrderItemDeliveryStatus, Status7 } from 'adyen';

const cardOrderItemDeliveryStatus: CardOrderItemDeliveryStatus = {
  errorMessage: 'errorMessage2',
  status: Status7.Shipped,
  trackingNumber: 'trackingNumber2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

