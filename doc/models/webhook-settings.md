
# Webhook Settings

*This model accepts additional fields of type unknown.*

## Structure

`WebhookSettings`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `webhookSettings` | [`WebhookSetting[] \| undefined`](../../doc/models/webhook-setting.md) | Optional | The list of webhook settings. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Type18, WebhookSettings } from 'adyenlib';

const webhookSettings: WebhookSettings = {
  webhookSettings: [
    {
      currency: 'currency8',
      id: 'id2',
      status: 'status6',
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
    },
    {
      currency: 'currency8',
      id: 'id2',
      status: 'status6',
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
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

