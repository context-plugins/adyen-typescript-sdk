
# Transaction Rule Reference

*This model accepts additional fields of type unknown.*

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
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TransactionRuleReference } from 'adyenlib';

const transactionRuleReference: TransactionRuleReference = {
  description: 'description2',
  id: 'id2',
  outcomeType: 'outcomeType8',
  reference: 'reference8',
  score: 220,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

