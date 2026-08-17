
# Merchant Links 2

References to resources connected with this merchant.

## Structure

`MerchantLinks2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiCredentials` | [`LinksElement \| undefined`](../../doc/models/links-element.md) | Optional | - |
| `self` | [`LinksElement6`](../../doc/models/links-element-6.md) | Required | Link to the resource itself. |
| `users` | [`LinksElement \| undefined`](../../doc/models/links-element.md) | Optional | - |
| `webhooks` | [`LinksElement \| undefined`](../../doc/models/links-element.md) | Optional | - |

## Example

```ts
import { MerchantLinks2 } from 'adyen';

const merchantLinks2: MerchantLinks2 = {
  self: {
    href: 'href0',
  },
  apiCredentials: {
    href: 'href8',
  },
  users: {
    href: 'href8',
  },
  webhooks: {
    href: 'href8',
  },
};
```

