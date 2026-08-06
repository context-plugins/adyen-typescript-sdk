
# Balance Webhook Setting

*This model accepts additional fields of type unknown.*

## Structure

`BalanceWebhookSetting`

## Inherits From

[`WebhookSetting`](../../doc/models/webhook-setting.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `conditions` | [`Condition[] \| undefined`](../../doc/models/condition.md) | Optional | The list of settings and criteria for triggering the [balance webhook](https://docs.adyen.com/api-explorer/balance-webhooks/latest/post/balanceAccount.balance.updated). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  BalanceType,
  BalanceWebhookSetting,
  ConditionType,
  Type18,
} from 'adyen';

const balanceWebhookSetting: BalanceWebhookSetting = {
  currency: 'currency6',
  id: 'id6',
  status: 'status2',
  target: {
    id: 'id2',
    type: Type18.BalanceAccount,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
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
  type: 'balance',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

