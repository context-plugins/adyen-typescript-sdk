
# Time of Day Restriction

*This model accepts additional fields of type unknown.*

## Structure

`TimeOfDayRestriction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | [`TimeOfDay \| undefined`](../../doc/models/time-of-day.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TimeOfDayRestriction } from 'adyen';

const timeOfDayRestriction: TimeOfDayRestriction = {
  operation: 'operation0',
  value: {
    endTime: 'endTime6',
    startTime: 'startTime8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

