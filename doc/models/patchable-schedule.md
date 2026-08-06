
# Patchable Schedule

*This model accepts additional fields of type unknown.*

## Structure

`PatchableSchedule`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`ScheduleType1 \| undefined`](../../doc/models/schedule-type-1.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PatchableSchedule, ScheduleType1 } from 'adyen';

const patchableSchedule: PatchableSchedule = {
  type: ScheduleType1.Weekdays,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

