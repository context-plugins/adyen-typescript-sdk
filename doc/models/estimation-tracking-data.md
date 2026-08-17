
# Estimation Tracking Data

## Structure

`EstimationTrackingData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `estimatedArrivalTime` | `string` | Required | The estimated time the beneficiary should have access to the funds. |
| `type` | `string` | Required, Constant | The type of tracking event.<br><br>Possible values:<br><br>- **estimation**: the estimated date and time of when the funds will be credited has been determined.<br><br>**Value**: `'estimation'` |

## Example

```ts
import { EstimationTrackingData } from 'adyen';

const estimationTrackingData: EstimationTrackingData = {
  estimatedArrivalTime: '2016-03-13T12:52:32.123Z',
  type: 'estimation',
};
```

