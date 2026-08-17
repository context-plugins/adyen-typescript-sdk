
# Transaction Rules Result 2

Contains the results of the evaluation of the transaction rules.

## Structure

`TransactionRulesResult2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `advice` | `string \| undefined` | Optional | The advice given by the Risk analysis. |
| `allHardBlockRulesPassed` | `boolean \| undefined` | Optional | Indicates whether the transaction passed the evaluation for all hardblock rules |
| `score` | `number \| undefined` | Optional | The score of the Risk analysis. |
| `triggeredTransactionRules` | [`TransactionEventViolation[] \| undefined`](../../doc/models/transaction-event-violation.md) | Optional | Array containing all the transaction rules that the transaction triggered. |

## Example

```ts
import { TransactionRulesResult2 } from 'adyen';

const transactionRulesResult2: TransactionRulesResult2 = {
  advice: 'advice4',
  allHardBlockRulesPassed: false,
  score: 10,
  triggeredTransactionRules: [
    {
      reason: 'reason6',
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
    },
    {
      reason: 'reason6',
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
    },
    {
      reason: 'reason6',
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
    }
  ],
};
```

