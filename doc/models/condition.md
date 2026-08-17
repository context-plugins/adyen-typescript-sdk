
# Condition

## Structure

`Condition`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balanceType` | [`BalanceTypeEnum`](../../doc/models/balance-type-enum.md) | Required | Define the type of balance about which you want to get notified. Possible values:<br><br>* **available**: the balance available for use.<br><br>* **balance**: the sum of transactions that have already been settled.<br><br>* **pending**: the sum of transactions that will be settled in the future.<br><br>* **reserved**: the balance currently held in reserve. |
| `conditionType` | [`ConditionTypeEnum`](../../doc/models/condition-type-enum.md) | Required | Define when you want to get notified about a balance change. Possible values:<br><br>* **greaterThan**: the balance in the account(s) exceeds the specified `value`.<br><br>* **greaterThanOrEqual**: the balance in the account(s) reaches or exceeds the specified `value`.<br><br>* **lessThan**: the balance in the account(s) drops below the specified `value`.<br><br>* **lessThanOrEqual**: the balance in the account(s) reaches to drops below the specified `value`. |
| `value` | `bigint` | Required | The value limit in the specified balance type and currency, in minor units. |

## Example

```ts
import { BalanceTypeEnum, Condition, ConditionTypeEnum } from 'adyen';

const condition: Condition = {
  balanceType: BalanceTypeEnum.Balance,
  conditionType: ConditionTypeEnum.LessThan,
  value: BigInt(194),
};
```

