
# Create Allowed Origin Request

## Structure

`CreateAllowedOriginRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `links` | [`Links2 \| undefined`](../../doc/models/links-2.md) | Optional | References to resources linked to the allowed origin. |
| `domain` | `string` | Required | Domain of the allowed origin. |
| `id` | `string \| undefined` | Optional | Unique identifier of the allowed origin. |

## Example

```ts
import { CreateAllowedOriginRequest } from 'adyen';

const createAllowedOriginRequest: CreateAllowedOriginRequest = {
  domain: 'https://adyen.com',
  links: {
    self: {
      href: 'href0',
    },
  },
  id: 'id8',
};
```

