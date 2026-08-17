
# Webhook Setting

## Structure

`WebhookSetting`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string` | Required | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the balance.<br><br>**Constraints**: *Minimum Length*: `1` |
| `id` | `string` | Required | The unique identifier of the webhook setting. |
| `status` | `string` | Required | The status of the webhook setting. Possible values:<br><br>* **active**: You receive a balance webhook if any of the conditions in this setting are met.<br>* **inactive**: You do not receive a balance webhook even if the conditions in this settings are met. |
| `target` | [`Target3`](../../doc/models/target-3.md) | Required | The resource about whose balance change you want to get notified. |
| `type` | `string \| undefined` | Optional | - |

## Example

```ts
import { Type181Enum, WebhookSetting } from 'adyen';

const webhookSetting: WebhookSetting = {
  currency: 'currency2',
  id: 'id2',
  status: 'status4',
  target: {
    id: 'id2',
    type: Type181Enum.BalanceAccount,
  },
  type: 'WebhookSetting',
};
```

