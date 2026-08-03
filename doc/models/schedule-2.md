
# Schedule 2

*This model accepts additional fields of type unknown.*

## Structure

`Schedule2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`ScheduleType1`](../../doc/models/schedule-type-1.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Schedule2, ScheduleType1 } from 'adyenlib';

const schedule2: Schedule2 = {
  type: ScheduleType1.Weekdays,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

