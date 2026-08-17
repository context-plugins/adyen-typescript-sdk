
# Api Credential Links 2

References to resources linked to the API credential.

## Structure

`ApiCredentialLinks2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `allowedOrigins` | [`LinksElement1 \| undefined`](../../doc/models/links-element-1.md) | Optional | List of allowed origins. |
| `company` | [`LinksElement2 \| undefined`](../../doc/models/links-element-2.md) | Optional | Company account that the API credential is linked to. Only present for company-level webhooks. |
| `generateApiKey` | [`LinksElement3 \| undefined`](../../doc/models/links-element-3.md) | Optional | Generates a new API key. When you generate a new one, the existing key remains valid for 24 hours. |
| `generateClientKey` | [`LinksElement4 \| undefined`](../../doc/models/links-element-4.md) | Optional | Generates a new client key, used to authenticate client-side requests. When you generate a new one, the existing key remains valid for 24 hours. |
| `merchant` | [`LinksElement5 \| undefined`](../../doc/models/links-element-5.md) | Optional | The merchant account that the API credential is linked to. Only present for merchant-level API credentials. |
| `self` | [`LinksElement6`](../../doc/models/links-element-6.md) | Required | Link to the resource itself. |

## Example

```ts
import { ApiCredentialLinks2 } from 'adyen';

const apiCredentialLinks2: ApiCredentialLinks2 = {
  self: {
    href: 'href0',
  },
  allowedOrigins: {
    href: 'href6',
  },
  company: {
    href: 'href2',
  },
  generateApiKey: {
    href: 'href6',
  },
  generateClientKey: {
    href: 'href4',
  },
  merchant: {
    href: 'href6',
  },
};
```

