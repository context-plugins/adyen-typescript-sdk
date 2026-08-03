
# Transaction Event Violation

*This model accepts additional fields of type unknown.*

## Structure

`TransactionEventViolation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `reason` | `string \| undefined` | Optional | An explanation about why the transaction rule failed. |
| `transactionRule` | [`TransactionRuleReference \| undefined`](../../doc/models/transaction-rule-reference.md) | Optional | - |
| `transactionRuleSource` | [`TransactionRuleSource \| undefined`](../../doc/models/transaction-rule-source.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TransactionEventViolation } from 'adyenlib';

const transactionEventViolation: TransactionEventViolation = {
  reason: 'reason8',
  transactionRule: {
    description: 'description2',
    id: 'id2',
    outcomeType: 'outcomeType8',
    reference: 'reference2',
    score: 68,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  transactionRuleSource: {
    id: 'id4',
    type: 'type4',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

