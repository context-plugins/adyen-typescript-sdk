
# Patchable Trigger 2

The condition that triggers the top-up. This can be a recurring schedule or a minimum balance threshold.

## Structure

`PatchableTrigger2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `schedule` | [`PatchableTrigger2Schedule \| null \| undefined`](../../doc/models/containers/patchable-trigger-2-schedule.md) | Optional | This is a container for one-of cases. |
| `threshold` | [`PatchableAmountDTO1 \| undefined`](../../doc/models/patchable-amount-dto-1.md) | Optional | The balance threshold that triggers the top-up. If the balance falls below this amount, a top-up is initiated. |

## Example

```ts
import { PatchableTrigger2, ScheduleType1Enum } from 'adyen';

const patchableTrigger2: PatchableTrigger2 = {
  schedule: {
    type: ScheduleType1Enum.Monthly,
  },
  threshold: {
    currency: 'currency8',
    value: BigInt(32),
  },
};
```

