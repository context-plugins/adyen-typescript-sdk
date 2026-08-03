
# Transaction Rules Result

*This model accepts additional fields of type unknown.*

## Structure

`TransactionRulesResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `advice` | `string \| undefined` | Optional | The advice given by the Risk analysis. |
| `allHardBlockRulesPassed` | `boolean \| undefined` | Optional | Indicates whether the transaction passed the evaluation for all hardblock rules |
| `score` | `number \| undefined` | Optional | The score of the Risk analysis. |
| `triggeredTransactionRules` | [`TransactionEventViolation[] \| undefined`](../../doc/models/transaction-event-violation.md) | Optional | Array containing all the transaction rules that the transaction triggered. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TransactionRulesResult } from 'adyenlib';

const transactionRulesResult: TransactionRulesResult = {
  advice: 'advice0',
  allHardBlockRulesPassed: false,
  score: 98,
  triggeredTransactionRules: [
    {
      reason: 'reason6',
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
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

