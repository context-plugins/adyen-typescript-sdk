
# Schedule Type 1 Enum

The type of schedule at which the top up is executed.

* **weekdays**: pull in funds Monday-Friday at 07:00 AM in the local timezone of the balance account.

* **weekly**: pull in funds every Monday at 07:00 AM in the local timezone of the balance account.

* **monthly**: pull in funds every first of the month at 07:00 AM in the local timezone of the balance account.

* **null** (default): continuous monitoring.

## Enumeration

`ScheduleType1Enum`

## Fields

| Name |
|  --- |
| `Weekdays` |
| `Weekly` |
| `Monthly` |

## Example

```ts
import { ScheduleType1Enum } from 'adyen';

const scheduleType1 = ScheduleType1Enum.Monthly;
```

