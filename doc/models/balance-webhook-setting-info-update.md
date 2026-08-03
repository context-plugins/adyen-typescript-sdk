
# Balance Webhook Setting Info Update

*This model accepts additional fields of type unknown.*

## Structure

`BalanceWebhookSettingInfoUpdate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `conditions` | [`Condition[] \| null \| undefined`](../../doc/models/condition.md) | Optional | The array of conditions a balance change must meet for Adyen to send the webhook.<br><br>**Constraints**: *Minimum Items*: `0`, *Maximum Items*: `20` |
| `currency` | `string \| undefined` | Optional | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the balance.<br><br>**Constraints**: *Minimum Length*: `1` |
| `status` | [`Status19 \| undefined`](../../doc/models/status-19.md) | Optional | - |
| `target` | [`TargetUpdate \| undefined`](../../doc/models/target-update.md) | Optional | - |
| `type` | [`Type20 \| undefined`](../../doc/models/type-20.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  BalanceType,
  BalanceWebhookSettingInfoUpdate,
  ConditionType,
  Status19,
  Type18,
  Type20,
} from 'adyenlib';

const balanceWebhookSettingInfoUpdate: BalanceWebhookSettingInfoUpdate = {
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
  currency: 'currency0',
  status: Status19.Active,
  target: {
    id: 'id2',
    type: Type18.BalanceAccount,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  type: Type20.Balance,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

