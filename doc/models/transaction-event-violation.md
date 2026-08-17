
# Transaction Event Violation

## Structure

`TransactionEventViolation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `reason` | `string \| undefined` | Optional | An explanation about why the transaction rule failed. |
| `transactionRule` | [`TransactionRuleReference2 \| undefined`](../../doc/models/transaction-rule-reference-2.md) | Optional | Contains information about the transaction rule. |
| `transactionRuleSource` | [`TransactionRuleSource2 \| undefined`](../../doc/models/transaction-rule-source-2.md) | Optional | Contains information about the resource to which the transaction rule applies. |

## Example

```ts
import { TransactionEventViolation } from 'adyen';

const transactionEventViolation: TransactionEventViolation = {
  reason: 'reason8',
  transactionRule: {
    description: 'description2',
    id: 'id2',
    outcomeType: 'outcomeType8',
    reference: 'reference2',
    score: 68,
  },
  transactionRuleSource: {
    id: 'id4',
    type: 'type4',
  },
};
```

