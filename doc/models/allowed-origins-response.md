
# Allowed Origins Response

*This model accepts additional fields of type unknown.*

## Structure

`AllowedOriginsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`AllowedOrigin[] \| undefined`](../../doc/models/allowed-origin.md) | Optional | List of allowed origins. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AllowedOriginsResponse } from 'adyen';

const allowedOriginsResponse: AllowedOriginsResponse = {
  data: [
    {
      domain: 'domain6',
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
      id: 'id0',
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

