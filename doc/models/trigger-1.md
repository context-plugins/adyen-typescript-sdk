
# Trigger 1

The condition that triggers the top-up. This can be a recurring schedule or a minimum balance threshold.

## Structure

`Trigger1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `schedule` | [`Schedule21 \| undefined`](../../doc/models/schedule-21.md) | Optional | Contains the details about the schedule that determines when the top up is executed. |
| `threshold` | [`Amount17`](../../doc/models/amount-17.md) | Required | The balance threshold that triggers the top-up. If the balance falls below this amount, a top-up is initiated. |

## Example

```ts
import { ScheduleType1Enum, Trigger1 } from 'adyen';

const trigger1: Trigger1 = {
  threshold: {
    currency: 'currency8',
    value: BigInt(32),
  },
  schedule: {
    type: ScheduleType1Enum.Weekdays,
  },
};
```

