
# Trigger 1

The condition that triggers the top-up. This can be a recurring schedule or a minimum balance threshold.

*This model accepts additional fields of type unknown.*

## Structure

`Trigger1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `schedule` | [`Schedule2 \| undefined`](../../doc/models/schedule-2.md) | Optional | - |
| `threshold` | [`Threshold2`](../../doc/models/threshold-2.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ScheduleType1, Trigger1 } from 'adyenlib';

const trigger1: Trigger1 = {
  threshold: {
    currency: 'currency8',
    value: BigInt(32),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  schedule: {
    type: ScheduleType1.Weekdays,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

