
# Transaction Rule Reference

## Structure

`TransactionRuleReference`

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
import { TransactionRuleReference } from 'adyen';

const transactionRuleReference: TransactionRuleReference = {
  description: 'description2',
  id: 'id2',
  outcomeType: 'outcomeType8',
  reference: 'reference8',
  score: 220,
};
```

