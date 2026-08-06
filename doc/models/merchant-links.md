
# Merchant Links

*This model accepts additional fields of type unknown.*

## Structure

`MerchantLinks`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiCredentials` | [`Href2 \| undefined`](../../doc/models/href-2.md) | Optional | List of allowed origins. |
| `self` | [`Self`](../../doc/models/self.md) | Required | - |
| `users` | [`Href2 \| undefined`](../../doc/models/href-2.md) | Optional | List of allowed origins. |
| `webhooks` | [`Href2 \| undefined`](../../doc/models/href-2.md) | Optional | List of allowed origins. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MerchantLinks } from 'adyen';

const merchantLinks: MerchantLinks = {
  self: {
    href: 'href0',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  apiCredentials: {
    href: 'href8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  users: {
    href: 'href8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  webhooks: {
    href: 'href8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

