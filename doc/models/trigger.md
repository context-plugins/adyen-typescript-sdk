
# Trigger

## Structure

`Trigger`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `schedule` | [`Schedule21 \| undefined`](../../doc/models/schedule-21.md) | Optional | Contains the details about the schedule that determines when the top up is executed. |
| `threshold` | [`Amount17`](../../doc/models/amount-17.md) | Required | The balance threshold that triggers the top-up. If the balance falls below this amount, a top-up is initiated. |

## Example

```ts
import { ScheduleType1Enum, Trigger } from 'adyen';

const trigger: Trigger = {
  threshold: {
    currency: 'currency8',
    value: BigInt(32),
  },
  schedule: {
    type: ScheduleType1Enum.Weekdays,
  },
};
```

