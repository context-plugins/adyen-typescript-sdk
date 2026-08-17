
# Balance Webhook Setting Info Update

## Structure

`BalanceWebhookSettingInfoUpdate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `conditions` | [`Condition[] \| null \| undefined`](../../doc/models/condition.md) | Optional | The array of conditions a balance change must meet for Adyen to send the webhook.<br><br>**Constraints**: *Minimum Items*: `0`, *Maximum Items*: `20` |
| `currency` | `string \| undefined` | Optional | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the balance.<br><br>**Constraints**: *Minimum Length*: `1` |
| `status` | [`Status6Enum \| undefined`](../../doc/models/status-6-enum.md) | Optional | The status of the webhook setting. Possible values:<br><br>* **active**: You receive a balance webhook if any of the conditions in this setting are met.<br>* **inactive**: You do not receive a balance webhook even if the conditions in this settings are met. |
| `target` | [`TargetUpdate2 \| undefined`](../../doc/models/target-update-2.md) | Optional | The type and ID of the resource about whose balance changes you want to be notified. |
| `type` | [`Type201Enum \| undefined`](../../doc/models/type-201-enum.md) | Optional | The type of the webhook you are configuring. Set to **balance**. |

## Example

```ts
import {
  BalanceTypeEnum,
  BalanceWebhookSettingInfoUpdate,
  ConditionTypeEnum,
  Status6Enum,
  Type181Enum,
  Type201Enum,
} from 'adyen';

const balanceWebhookSettingInfoUpdate: BalanceWebhookSettingInfoUpdate = {
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
  currency: 'currency0',
  status: Status6Enum.Active,
  target: {
    id: 'id2',
    type: Type181Enum.BalanceAccount,
  },
  type: Type201Enum.Balance,
};
```

