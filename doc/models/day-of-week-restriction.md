
# Day of Week Restriction

## Structure

`DayOfWeekRestriction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | [`Value1Enum[] \| undefined`](../../doc/models/value-1-enum.md) | Optional | List of days of the week.<br><br>Possible values: **monday**, **tuesday**, **wednesday**, **thursday**, **friday**, **saturday**, **sunday**. |

## Example

```ts
import { DayOfWeekRestriction, Value1Enum } from 'adyen';

const dayOfWeekRestriction: DayOfWeekRestriction = {
  operation: 'operation2',
  value: [
    Value1Enum.Thursday,
    Value1Enum.Tuesday
  ],
};
```

