
# Create Allowed Origin Request

*This model accepts additional fields of type unknown.*

## Structure

`CreateAllowedOriginRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `links` | [`Links2 \| undefined`](../../doc/models/links-2.md) | Optional | - |
| `domain` | `string` | Required | Domain of the allowed origin. |
| `id` | `string \| undefined` | Optional | Unique identifier of the allowed origin. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CreateAllowedOriginRequest } from 'adyenlib';

const createAllowedOriginRequest: CreateAllowedOriginRequest = {
  domain: 'https://adyen.com',
  links: {
    self: {
      href: 'href0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  id: 'id8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

