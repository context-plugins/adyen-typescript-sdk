
# Schedule 21

Contains the details about the schedule that determines when the top up is executed.

## Structure

`Schedule21`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`ScheduleType1Enum`](../../doc/models/schedule-type-1-enum.md) | Required | The type of schedule at which the top up is executed.<br><br>* **weekdays**: pull in funds Monday-Friday at 07:00 AM in the local timezone of the balance account.<br><br>* **weekly**: pull in funds every Monday at 07:00 AM in the local timezone of the balance account.<br><br>* **monthly**: pull in funds every first of the month at 07:00 AM in the local timezone of the balance account.<br><br>* **null** (default): continuous monitoring. |

## Example

```ts
import { Schedule21, ScheduleType1Enum } from 'adyen';

const schedule21: Schedule21 = {
  type: ScheduleType1Enum.Monthly,
};
```

