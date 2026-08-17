
# Balance Webhook Setting

## Structure

`BalanceWebhookSetting`

## Inherits From

[`WebhookSetting`](../../doc/models/webhook-setting.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `conditions` | [`Condition[] \| undefined`](../../doc/models/condition.md) | Optional | The list of settings and criteria for triggering the [balance webhook](https://docs.adyen.com/api-explorer/balance-webhooks/latest/post/balanceAccount.balance.updated). |

## Example

```ts
import {
  BalanceTypeEnum,
  BalanceWebhookSetting,
  ConditionTypeEnum,
  Type181Enum,
} from 'adyen';

const balanceWebhookSetting: BalanceWebhookSetting = {
  currency: 'currency6',
  id: 'id6',
  status: 'status2',
  target: {
    id: 'id2',
    type: Type181Enum.BalanceAccount,
  },
  conditions: [
    {
      balanceType: BalanceTypeEnum.Balance,
      conditionType: ConditionTypeEnum.LessThan,
      value: BigInt(214),
    },
    {
      balanceType: BalanceTypeEnum.Balance,
      conditionType: ConditionTypeEnum.LessThan,
      value: BigInt(214),
    },
    {
      balanceType: BalanceTypeEnum.Balance,
      conditionType: ConditionTypeEnum.LessThan,
      value: BigInt(214),
    }
  ],
  type: 'balance',
};
```

