
# Day of Week Restriction 1

List of week days and the operation. Supported operations: **anyMatch**, **noneMatch**.

## Structure

`DayOfWeekRestriction1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | [`Value1Enum[] \| undefined`](../../doc/models/value-1-enum.md) | Optional | List of days of the week.<br><br>Possible values: **monday**, **tuesday**, **wednesday**, **thursday**, **friday**, **saturday**, **sunday**. |

## Example

```ts
import { DayOfWeekRestriction1, Value1Enum } from 'adyen';

const dayOfWeekRestriction1: DayOfWeekRestriction1 = {
  operation: 'operation6',
  value: [
    Value1Enum.Tuesday
  ],
};
```

