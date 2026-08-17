
# Matching Transactions Restriction

## Structure

`MatchingTransactionsRestriction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | `number \| undefined` | Optional | The number of transactions. |

## Example

```ts
import { MatchingTransactionsRestriction } from 'adyen';

const matchingTransactionsRestriction: MatchingTransactionsRestriction = {
  operation: 'operation2',
  value: 162,
};
```

