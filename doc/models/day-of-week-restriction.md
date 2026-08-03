
# Day of Week Restriction

*This model accepts additional fields of type unknown.*

## Structure

`DayOfWeekRestriction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | [`Value1[] \| undefined`](../../doc/models/value-1.md) | Optional | List of days of the week.<br><br>Possible values: **monday**, **tuesday**, **wednesday**, **thursday**, **friday**, **saturday**, **sunday**. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DayOfWeekRestriction, Value1 } from 'adyenlib';

const dayOfWeekRestriction: DayOfWeekRestriction = {
  operation: 'operation2',
  value: [
    Value1.Thursday,
    Value1.Tuesday
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

