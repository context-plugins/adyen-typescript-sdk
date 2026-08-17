
# Transaction Rule Reference 2

Contains information about the transaction rule.

## Structure

`TransactionRuleReference2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| undefined` | Optional | The description of the resource. |
| `id` | `string \| undefined` | Optional | The unique identifier of the resource. |
| `outcomeType` | `string \| undefined` | Optional | The outcome type of the rule. |
| `reference` | `string \| undefined` | Optional | The reference for the resource. |
| `score` | `number \| undefined` | Optional | The transaction score determined by the rule. Returned only when `outcomeType` is **scoreBased**. |

## Example

```ts
import { TransactionRuleReference2 } from 'adyen';

const transactionRuleReference2: TransactionRuleReference2 = {
  description: 'description8',
  id: 'id2',
  outcomeType: 'outcomeType2',
  reference: 'reference2',
  score: 200,
};
```

