
# Matching Transactions Restriction 1

The number of transactions and the operation.

Supported operations: **equals**, **notEquals**, **greaterThanOrEqualTo**, **greaterThan**, **lessThanOrEqualTo**, **lessThan**.

## Structure

`MatchingTransactionsRestriction1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | `number \| undefined` | Optional | The number of transactions. |

## Example

```ts
import { MatchingTransactionsRestriction1 } from 'adyen';

const matchingTransactionsRestriction1: MatchingTransactionsRestriction1 = {
  operation: 'operation2',
  value: 116,
};
```

