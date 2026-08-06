
# Matching Values Restriction

*This model accepts additional fields of type unknown.*

## Structure

`MatchingValuesRestriction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | [`Value3[] \| undefined`](../../doc/models/value-3.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MatchingValuesRestriction, Value3 } from 'adyen';

const matchingValuesRestriction: MatchingValuesRestriction = {
  operation: 'operation6',
  value: [
    Value3.AcquirerId,
    Value3.Amount
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

