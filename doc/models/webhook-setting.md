
# Webhook Setting

*This model accepts additional fields of type unknown.*

## Structure

`WebhookSetting`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string` | Required | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the balance.<br><br>**Constraints**: *Minimum Length*: `1` |
| `id` | `string` | Required | The unique identifier of the webhook setting. |
| `status` | `string` | Required | The status of the webhook setting. Possible values:<br><br>* **active**: You receive a balance webhook if any of the conditions in this setting are met.<br>* **inactive**: You do not receive a balance webhook even if the conditions in this settings are met. |
| `target` | [`Target`](../../doc/models/target.md) | Required | - |
| `type` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Type18, WebhookSetting } from 'adyenlib';

const webhookSetting: WebhookSetting = {
  currency: 'currency2',
  id: 'id2',
  status: 'status4',
  target: {
    id: 'id2',
    type: Type18.BalanceAccount,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  type: 'WebhookSetting',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

