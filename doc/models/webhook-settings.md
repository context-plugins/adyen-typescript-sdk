
# Webhook Settings

## Structure

`WebhookSettings`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `webhookSettings` | [`WebhookSetting[] \| undefined`](../../doc/models/webhook-setting.md) | Optional | The list of webhook settings. |

## Example

```ts
import { Type181Enum, WebhookSettings } from 'adyen';

const webhookSettings: WebhookSettings = {
  webhookSettings: [
    {
      currency: 'currency8',
      id: 'id2',
      status: 'status6',
      target: {
        id: 'id2',
        type: Type181Enum.BalanceAccount,
      },
      type: 'WebhookSetting',
    },
    {
      currency: 'currency8',
      id: 'id2',
      status: 'status6',
      target: {
        id: 'id2',
        type: Type181Enum.BalanceAccount,
      },
      type: 'WebhookSetting',
    }
  ],
};
```

