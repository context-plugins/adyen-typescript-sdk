
# Company Links

## Structure

`CompanyLinks`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiCredentials` | [`LinksElement \| undefined`](../../doc/models/links-element.md) | Optional | - |
| `self` | [`LinksElement6`](../../doc/models/links-element-6.md) | Required | Link to the resource itself. |
| `users` | [`LinksElement \| undefined`](../../doc/models/links-element.md) | Optional | - |
| `webhooks` | [`LinksElement \| undefined`](../../doc/models/links-element.md) | Optional | - |

## Example

```ts
import { CompanyLinks } from 'adyen';

const companyLinks: CompanyLinks = {
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

