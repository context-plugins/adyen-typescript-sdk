
# Matching Transactions Restriction

*This model accepts additional fields of type unknown.*

## Structure

`MatchingTransactionsRestriction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | `number \| undefined` | Optional | The number of transactions. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MatchingTransactionsRestriction } from 'adyenlib';

const matchingTransactionsRestriction: MatchingTransactionsRestriction = {
  operation: 'operation2',
  value: 162,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

