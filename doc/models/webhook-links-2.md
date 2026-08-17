
# Webhook Links 2

References to resources connected with this webhook.

## Structure

`WebhookLinks2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `company` | [`LinksElement15 \| undefined`](../../doc/models/links-element-15.md) | Optional | The company account that the webhook is configured for. Only present for company-level webhooks. |
| `generateHmac` | [`LinksElement16`](../../doc/models/links-element-16.md) | Required | Generate an HMAC key. |
| `merchant` | [`LinksElement17 \| undefined`](../../doc/models/links-element-17.md) | Optional | The merchant account that the webhook is configured for. Only present for merchant-level webhooks. |
| `self` | [`LinksElement6`](../../doc/models/links-element-6.md) | Required | Link to the resource itself. |
| `testWebhook` | [`LinksElement19`](../../doc/models/links-element-19.md) | Required | Test the webhook setup. |

## Example

```ts
import { WebhookLinks2 } from 'adyen';

const webhookLinks2: WebhookLinks2 = {
  generateHmac: {
    href: 'href6',
  },
  self: {
    href: 'href0',
  },
  testWebhook: {
    href: 'href6',
  },
  company: {
    href: 'href2',
  },
  merchant: {
    href: 'href6',
  },
};
```

