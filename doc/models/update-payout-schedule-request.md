
# Update Payout Schedule Request

*This model accepts additional fields of type unknown.*

## Structure

`UpdatePayoutScheduleRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `action` | [`Action \| undefined`](../../doc/models/action.md) | Optional | - |
| `reason` | `string \| undefined` | Optional | The reason for the payout schedule update.<br><br>> This field is required when the `schedule` parameter is set to `HOLD`. |
| `schedule` | [`Schedule1`](../../doc/models/schedule-1.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Action, Schedule1, UpdatePayoutScheduleRequest } from 'adyenlib';

const updatePayoutScheduleRequest: UpdatePayoutScheduleRequest = {
  schedule: Schedule1.WeeklyOnTueFriMidnight,
  action: Action.Nothing,
  reason: 'reason0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

