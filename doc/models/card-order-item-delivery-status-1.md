
# Card Order Item Delivery Status 1

Contains information about the status of the PIN delivery.

*This model accepts additional fields of type unknown.*

## Structure

`CardOrderItemDeliveryStatus1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errorMessage` | `string \| undefined` | Optional | An error message. |
| `status` | [`Status7 \| undefined`](../../doc/models/status-7.md) | Optional | - |
| `trackingNumber` | `string \| undefined` | Optional | The tracking number of the PIN delivery. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CardOrderItemDeliveryStatus1, Status7 } from 'adyenlib';

const cardOrderItemDeliveryStatus1: CardOrderItemDeliveryStatus1 = {
  errorMessage: 'errorMessage0',
  status: Status7.Created,
  trackingNumber: 'trackingNumber0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

