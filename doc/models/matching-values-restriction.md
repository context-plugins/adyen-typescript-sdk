
# Matching Values Restriction

## Structure

`MatchingValuesRestriction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | [`Value3Enum[] \| undefined`](../../doc/models/value-3-enum.md) | Optional | - |

## Example

```ts
import { MatchingValuesRestriction, Value3Enum } from 'adyen';

const matchingValuesRestriction: MatchingValuesRestriction = {
  operation: 'operation6',
  value: [
    Value3Enum.AcquirerId,
    Value3Enum.Amount
  ],
};
```

