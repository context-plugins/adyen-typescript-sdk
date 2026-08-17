
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

## Structure

`MatchingValuesRestriction1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | [`Value3Enum[] \| undefined`](../../doc/models/value-3-enum.md) | Optional | - |

## Example

```ts
import { MatchingValuesRestriction1, Value3Enum } from 'adyen';

const matchingValuesRestriction1: MatchingValuesRestriction1 = {
  operation: 'operation0',
  value: [
    Value3Enum.MerchantName,
    Value3Enum.AcquirerId,
    Value3Enum.Amount
  ],
};
```

