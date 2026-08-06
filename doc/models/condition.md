
# Condition

*This model accepts additional fields of type unknown.*

## Structure

`Condition`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balanceType` | [`BalanceType`](../../doc/models/balance-type.md) | Required | - |
| `conditionType` | [`ConditionType`](../../doc/models/condition-type.md) | Required | - |
| `value` | `bigint` | Required | The value limit in the specified balance type and currency, in minor units. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BalanceType, Condition, ConditionType } from 'adyen';

const condition: Condition = {
  balanceType: BalanceType.Balance,
  conditionType: ConditionType.LessThan,
  value: BigInt(194),
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

