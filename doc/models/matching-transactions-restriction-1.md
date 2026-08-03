
# Matching Transactions Restriction 1

The number of transactions and the operation.

Supported operations: **equals**, **notEquals**, **greaterThanOrEqualTo**, **greaterThan**, **lessThanOrEqualTo**, **lessThan**.

*This model accepts additional fields of type unknown.*

## Structure

`MatchingTransactionsRestriction1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | `number \| undefined` | Optional | The number of transactions. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MatchingTransactionsRestriction1 } from 'adyenlib';

const matchingTransactionsRestriction1: MatchingTransactionsRestriction1 = {
  operation: 'operation2',
  value: 116,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

