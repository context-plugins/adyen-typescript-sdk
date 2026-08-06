
# Api Credential Links

*This model accepts additional fields of type unknown.*

## Structure

`ApiCredentialLinks`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `allowedOrigins` | [`AllowedOrigins \| undefined`](../../doc/models/allowed-origins.md) | Optional | - |
| `company` | [`Company4 \| undefined`](../../doc/models/company-4.md) | Optional | - |
| `generateApiKey` | [`GenerateApiKey \| undefined`](../../doc/models/generate-api-key.md) | Optional | - |
| `generateClientKey` | [`GenerateClientKey \| undefined`](../../doc/models/generate-client-key.md) | Optional | - |
| `merchant` | [`Merchant1 \| undefined`](../../doc/models/merchant-1.md) | Optional | - |
| `self` | [`Self`](../../doc/models/self.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ApiCredentialLinks } from 'adyen';

const apiCredentialLinks: ApiCredentialLinks = {
  self: {
    href: 'href0',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  allowedOrigins: {
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
  generateApiKey: {
    href: 'href6',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  generateClientKey: {
    href: 'href4',
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

