
# Event Url

## Structure

`EventUrl`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `eventLocalUrls` | [`Url[] \| undefined`](../../doc/models/url.md) | Optional | One or more local URLs to send event notifications to when using Terminal API. |
| `eventPublicUrls` | [`Url[] \| undefined`](../../doc/models/url.md) | Optional | One or more public URLs to send event notifications to when using Terminal API. |

## Example

```ts
import { EventUrl } from 'adyen';

const eventUrl: EventUrl = {
  eventLocalUrls: [
    {
      encrypted: false,
      password: 'password4',
      url: 'url4',
      username: 'username0',
    }
  ],
  eventPublicUrls: [
    {
      encrypted: false,
      password: 'password8',
      url: 'url8',
      username: 'username4',
    },
    {
      encrypted: false,
      password: 'password8',
      url: 'url8',
      username: 'username4',
    }
  ],
};
```

