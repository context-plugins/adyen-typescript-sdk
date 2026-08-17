
# Patchable Trigger

## Structure

`PatchableTrigger`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `schedule` | [`PatchableTriggerSchedule \| null \| undefined`](../../doc/models/containers/patchable-trigger-schedule.md) | Optional | This is a container for one-of cases. |
| `threshold` | [`PatchableAmountDTO1 \| undefined`](../../doc/models/patchable-amount-dto-1.md) | Optional | The balance threshold that triggers the top-up. If the balance falls below this amount, a top-up is initiated. |

## Example

```ts
import { PatchableTrigger, ScheduleType1Enum } from 'adyen';

const patchableTrigger: PatchableTrigger = {
  schedule: {
    type: ScheduleType1Enum.Monthly,
  },
  threshold: {
    currency: 'currency8',
    value: BigInt(32),
  },
};
```

