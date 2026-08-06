
# Balance Webhook Setting Info

*This model accepts additional fields of type unknown.*

## Structure

`BalanceWebhookSettingInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `conditions` | [`Condition[] \| undefined`](../../doc/models/condition.md) | Optional | The array of conditions a balance change must meet for Adyen to send the webhook.<br><br>**Constraints**: *Minimum Items*: `0`, *Maximum Items*: `20` |
| `currency` | `string` | Required | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the balance.<br><br>**Constraints**: *Minimum Length*: `1` |
| `status` | [`Status19`](../../doc/models/status-19.md) | Required | - |
| `target` | [`Target`](../../doc/models/target.md) | Required | - |
| `type` | [`Type20`](../../doc/models/type-20.md) | Required | The type of the webhook you are configuring. Set to **balance**. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  BalanceType,
  BalanceWebhookSettingInfo,
  ConditionType,
  Status19,
  Type18,
  Type20,
} from 'adyen';

const balanceWebhookSettingInfo: BalanceWebhookSettingInfo = {
  currency: 'currency8',
  status: Status19.Active,
  target: {
    id: 'id2',
    type: Type18.BalanceAccount,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  type: Type20.Balance,
  conditions: [
    {
      balanceType: BalanceType.Balance,
      conditionType: ConditionType.LessThan,
      value: BigInt(214),
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      balanceType: BalanceType.Balance,
      conditionType: ConditionType.LessThan,
      value: BigInt(214),
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

