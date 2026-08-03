
# Webhook Links

*This model accepts additional fields of type unknown.*

## Structure

`WebhookLinks`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `company` | [`Company4 \| undefined`](../../doc/models/company-4.md) | Optional | - |
| `generateHmac` | [`GenerateHmac`](../../doc/models/generate-hmac.md) | Required | - |
| `merchant` | [`Merchant1 \| undefined`](../../doc/models/merchant-1.md) | Optional | - |
| `self` | [`Self`](../../doc/models/self.md) | Required | - |
| `testWebhook` | [`TestWebhook`](../../doc/models/test-webhook.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { WebhookLinks } from 'adyenlib';

const webhookLinks: WebhookLinks = {
  generateHmac: {
    href: 'href6',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  self: {
    href: 'href0',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  testWebhook: {
    href: 'href6',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  company: {
    href: 'href2',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  merchant: {
    href: 'href6',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

