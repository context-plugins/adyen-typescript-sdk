
# Balance Webhook Setting Info

## Structure

`BalanceWebhookSettingInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `conditions` | [`Condition[] \| undefined`](../../doc/models/condition.md) | Optional | The array of conditions a balance change must meet for Adyen to send the webhook.<br><br>**Constraints**: *Minimum Items*: `0`, *Maximum Items*: `20` |
| `currency` | `string` | Required | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the balance.<br><br>**Constraints**: *Minimum Length*: `1` |
| `status` | [`Status6Enum`](../../doc/models/status-6-enum.md) | Required | The status of the webhook setting. Possible values:<br><br>* **active**: You receive a balance webhook if any of the conditions in this setting are met.<br>* **inactive**: You do not receive a balance webhook even if the conditions in this settings are met. |
| `target` | [`Target1`](../../doc/models/target-1.md) | Required | The type and ID of the resource about whose balance changes you want to be notified. |
| `type` | `string` | Required, Constant | The type of the webhook you are configuring. Set to **balance**.<br><br>**Value**: `'balance'` |

## Example

```ts
import {
  BalanceTypeEnum,
  BalanceWebhookSettingInfo,
  ConditionTypeEnum,
  Status6Enum,
  Type181Enum,
} from 'adyen';

const balanceWebhookSettingInfo: BalanceWebhookSettingInfo = {
  currency: 'currency8',
  status: Status6Enum.Active,
  target: {
    id: 'id2',
    type: Type181Enum.BalanceAccount,
  },
  type: 'balance',
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
    }
  ],
};
```

