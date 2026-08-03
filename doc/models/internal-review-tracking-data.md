
# Internal Review Tracking Data

*This model accepts additional fields of type unknown.*

## Structure

`InternalReviewTrackingData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `reason` | [`Reason11 \| undefined`](../../doc/models/reason-11.md) | Optional | - |
| `status` | [`Status44`](../../doc/models/status-44.md) | Required | - |
| `type` | [`Type90`](../../doc/models/type-90.md) | Required | The type of tracking event.<br><br>Possible values:<br><br>- **internalReview**: the transfer was flagged because it does not comply with Adyen's risk policy. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  InternalReviewTrackingData,
  Reason11,
  Status44,
  Type90,
} from 'adyenlib';

const internalReviewTrackingData: InternalReviewTrackingData = {
  status: Status44.Pending,
  type: Type90.InternalReview,
  reason: Reason11.RefusedForRegulatoryReasons,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

