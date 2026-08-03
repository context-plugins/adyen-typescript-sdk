
# Update Payout Schedule Request 2

The details of the payout schedule to which the account must be updated.

*This model accepts additional fields of type unknown.*

## Structure

`UpdatePayoutScheduleRequest2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `action` | [`Action \| undefined`](../../doc/models/action.md) | Optional | - |
| `reason` | `string \| undefined` | Optional | The reason for the payout schedule update.<br><br>> This field is required when the `schedule` parameter is set to `HOLD`. |
| `schedule` | [`Schedule1`](../../doc/models/schedule-1.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Action, Schedule1, UpdatePayoutScheduleRequest2 } from 'adyenlib';

const updatePayoutScheduleRequest2: UpdatePayoutScheduleRequest2 = {
  schedule: Schedule1.BiweeklyOn1StAnd15ThAtMidnight,
  action: Action.Nothing,
  reason: 'reason8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

