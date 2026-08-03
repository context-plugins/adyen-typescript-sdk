
# Patchable Trigger 2

The condition that triggers the top-up. This can be a recurring schedule or a minimum balance threshold.

*This model accepts additional fields of type unknown.*

## Structure

`PatchableTrigger2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `schedule` | [`PatchableTrigger2Schedule \| undefined`](../../doc/models/containers/patchable-trigger-2-schedule.md) | Optional | This is a container for one-of cases. |
| `threshold` | [`Threshold3 \| undefined`](../../doc/models/threshold-3.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PatchableTrigger2, ScheduleType1 } from 'adyenlib';

const patchableTrigger2: PatchableTrigger2 = {
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

