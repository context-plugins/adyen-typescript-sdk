
# Patchable Trigger

*This model accepts additional fields of type unknown.*

## Structure

`PatchableTrigger`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `schedule` | [`PatchableTriggerSchedule \| undefined`](../../doc/models/containers/patchable-trigger-schedule.md) | Optional | This is a container for one-of cases. |
| `threshold` | [`Threshold3 \| undefined`](../../doc/models/threshold-3.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PatchableTrigger, ScheduleType1 } from 'adyenlib';

const patchableTrigger: PatchableTrigger = {
  schedule: {
    type: ScheduleType1.Monthly,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  threshold: {
    currency: 'currency8',
    value: BigInt(32),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

