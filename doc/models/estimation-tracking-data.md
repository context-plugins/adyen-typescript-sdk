
# Estimation Tracking Data

*This model accepts additional fields of type unknown.*

## Structure

`EstimationTrackingData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `estimatedArrivalTime` | `string` | Required | The estimated time the beneficiary should have access to the funds. |
| `type` | [`Type84`](../../doc/models/type-84.md) | Required | The type of tracking event.<br><br>Possible values:<br><br>- **estimation**: the estimated date and time of when the funds will be credited has been determined. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { EstimationTrackingData, Type84 } from 'adyen';

const estimationTrackingData: EstimationTrackingData = {
  estimatedArrivalTime: '2016-03-13T12:52:32.123Z',
  type: Type84.Estimation,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

