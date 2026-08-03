
# Confirmation Tracking Data

*This model accepts additional fields of type unknown.*

## Structure

`ConfirmationTrackingData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | [`Status110`](../../doc/models/status-110.md) | Required | - |
| `type` | [`Type834`](../../doc/models/type-834.md) | Required | The type of the tracking event.<br><br>Possible values:<br><br>- **confirmation**: the transfer passed Adyen's internal review. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ConfirmationTrackingData, Status110, Type834 } from 'adyenlib';

const confirmationTrackingData: ConfirmationTrackingData = {
  status: Status110.Credited,
  type: Type834.Confirmation,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

