
# Schedule 21

Contains the details about the schedule that determines when the top up is executed.

*This model accepts additional fields of type unknown.*

## Structure

`Schedule21`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`ScheduleType1`](../../doc/models/schedule-type-1.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Schedule21, ScheduleType1 } from 'adyenlib';

const schedule21: Schedule21 = {
  type: ScheduleType1.Monthly,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

