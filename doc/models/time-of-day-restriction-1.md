
# Time of Day Restriction 1

A start and end time in a time-only ISO-8601 extended offset format. Supported operations: **equals**, **notEquals**.

## Structure

`TimeOfDayRestriction1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | [`TimeOfDay \| undefined`](../../doc/models/time-of-day.md) | Optional | - |

## Example

```ts
import { TimeOfDayRestriction1 } from 'adyen';

const timeOfDayRestriction1: TimeOfDayRestriction1 = {
  operation: 'operation8',
  value: {
    endTime: 'endTime6',
    startTime: 'startTime8',
  },
};
```

