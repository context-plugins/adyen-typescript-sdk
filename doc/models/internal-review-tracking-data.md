
# Internal Review Tracking Data

## Structure

`InternalReviewTrackingData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `reason` | [`Reason11Enum \| undefined`](../../doc/models/reason-11-enum.md) | Optional | The reason why the transfer failed Adyen's internal review.<br><br>Possible values:<br><br>- **refusedForRegulatoryReasons**: the transfer does not comply with Adyen's risk policy. For more information, [contact the Support Team](https://www.adyen.help/hc/en-us/requests/new). |
| `status` | [`Status44Enum`](../../doc/models/status-44-enum.md) | Required | The status of the transfer.<br><br>Possible values:<br><br>- **pending**: the transfer is under internal review by Adyen.<br><br>- **failed**: the transfer failed Adyen's internal review. For details, see `reason`. |
| `type` | `string` | Required, Constant | The type of tracking event.<br><br>Possible values:<br><br>- **internalReview**: the transfer was flagged because it does not comply with Adyen's risk policy.<br><br>**Value**: `'internalReview'` |

## Example

```ts
import {
  InternalReviewTrackingData,
  Reason11Enum,
  Status44Enum,
} from 'adyen';

const internalReviewTrackingData: InternalReviewTrackingData = {
  status: Status44Enum.Pending,
  type: 'internalReview',
  reason: Reason11Enum.RefusedForRegulatoryReasons,
};
```

