
# Trigger

*This model accepts additional fields of type unknown.*

## Structure

`Trigger`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `schedule` | [`Schedule2 \| undefined`](../../doc/models/schedule-2.md) | Optional | - |
| `threshold` | [`Threshold2`](../../doc/models/threshold-2.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ScheduleType1, Trigger } from 'adyen';

const trigger: Trigger = {
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

