
# Time of Day Restriction

## Structure

`TimeOfDayRestriction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | [`TimeOfDay \| undefined`](../../doc/models/time-of-day.md) | Optional | - |

## Example

```ts
import { TimeOfDayRestriction } from 'adyen';

const timeOfDayRestriction: TimeOfDayRestriction = {
  operation: 'operation0',
  value: {
    endTime: 'endTime6',
    startTime: 'startTime8',
  },
};
```

