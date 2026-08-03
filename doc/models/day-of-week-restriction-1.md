
# Day of Week Restriction 1

List of week days and the operation. Supported operations: **anyMatch**, **noneMatch**.

*This model accepts additional fields of type unknown.*

## Structure

`DayOfWeekRestriction1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | [`Value1[] \| undefined`](../../doc/models/value-1.md) | Optional | List of days of the week.<br><br>Possible values: **monday**, **tuesday**, **wednesday**, **thursday**, **friday**, **saturday**, **sunday**. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DayOfWeekRestriction1, Value1 } from 'adyenlib';

const dayOfWeekRestriction1: DayOfWeekRestriction1 = {
  operation: 'operation6',
  value: [
    Value1.Tuesday
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

