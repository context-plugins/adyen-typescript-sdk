
# Patchable Schedule

## Structure

`PatchableSchedule`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`ScheduleType1Enum \| undefined`](../../doc/models/schedule-type-1-enum.md) | Optional | The type of schedule at which the top up is executed.<br><br>* **weekdays**: pull in funds Monday-Friday at 07:00 AM in the local timezone of the balance account.<br><br>* **weekly**: pull in funds every Monday at 07:00 AM in the local timezone of the balance account.<br><br>* **monthly**: pull in funds every first of the month at 07:00 AM in the local timezone of the balance account.<br><br>* **null** (default): continuous monitoring. |

## Example

```ts
import { PatchableSchedule, ScheduleType1Enum } from 'adyen';

const patchableSchedule: PatchableSchedule = {
  type: ScheduleType1Enum.Weekdays,
};
```

