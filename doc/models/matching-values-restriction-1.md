
# Matching Values Restriction 1

Checks if a user has recently made multiple transfers with the specified values.

To use this restriction, you must:

- Set the rule `type` to **velocity**.

- Specify a time `interval`.

- Specify a number of `matchingTransactions`.

Supported operation: **allMatch**.

Supported value inputs:

- **merchantId** and **acquirerId**
- **amount** and **currency**
- **merchantName**.

*This model accepts additional fields of type unknown.*

## Structure

`MatchingValuesRestriction1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | [`Value3[] \| undefined`](../../doc/models/value-3.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MatchingValuesRestriction1, Value3 } from 'adyen';

const matchingValuesRestriction1: MatchingValuesRestriction1 = {
  operation: 'operation0',
  value: [
    Value3.MerchantName,
    Value3.AcquirerId,
    Value3.Amount
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

