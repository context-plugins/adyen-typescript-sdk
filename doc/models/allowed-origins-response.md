
# Allowed Origins Response

## Structure

`AllowedOriginsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`AllowedOrigin[] \| undefined`](../../doc/models/allowed-origin.md) | Optional | List of allowed origins. |

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
        },
      },
      id: 'id0',
    }
  ],
};
```

