
# Card Order Item Delivery Status 3

The status of the card delivery.

Possible values: **created**, **rejected**, **processing**, **produced**, **shipped**, **delivered**, **notApplicable**, **unknown**.

*This model accepts additional fields of type unknown.*

## Structure

`CardOrderItemDeliveryStatus3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errorMessage` | `string \| undefined` | Optional | An error message. |
| `status` | [`Status7 \| undefined`](../../doc/models/status-7.md) | Optional | - |
| `trackingNumber` | `string \| undefined` | Optional | The tracking number of the PIN delivery. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CardOrderItemDeliveryStatus3, Status7 } from 'adyenlib';

const cardOrderItemDeliveryStatus3: CardOrderItemDeliveryStatus3 = {
  errorMessage: 'errorMessage2',
  status: Status7.Created,
  trackingNumber: 'trackingNumber2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

