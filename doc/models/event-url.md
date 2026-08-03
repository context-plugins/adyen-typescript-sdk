
# Event Url

*This model accepts additional fields of type unknown.*

## Structure

`EventUrl`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `eventLocalUrls` | [`Url[] \| undefined`](../../doc/models/url.md) | Optional | One or more local URLs to send event notifications to when using Terminal API. |
| `eventPublicUrls` | [`Url[] \| undefined`](../../doc/models/url.md) | Optional | One or more public URLs to send event notifications to when using Terminal API. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { EventUrl } from 'adyenlib';

const eventUrl: EventUrl = {
  eventLocalUrls: [
    {
      encrypted: false,
      password: 'password4',
      url: 'url4',
      username: 'username0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  eventPublicUrls: [
    {
      encrypted: false,
      password: 'password8',
      url: 'url8',
      username: 'username4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      encrypted: false,
      password: 'password8',
      url: 'url8',
      username: 'username4',
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

