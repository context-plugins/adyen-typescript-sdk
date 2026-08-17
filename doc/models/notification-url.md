
# Notification Url

## Structure

`NotificationUrl`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localUrls` | [`Url[] \| undefined`](../../doc/models/url.md) | Optional | One or more local URLs to send notifications to when using Terminal API. |
| `publicUrls` | [`Url[] \| undefined`](../../doc/models/url.md) | Optional | One or more public URLs to send notifications to when using Terminal API. |

## Example

```ts
import { NotificationUrl } from 'adyen';

const notificationUrl: NotificationUrl = {
  localUrls: [
    {
      encrypted: false,
      password: 'password4',
      url: 'url4',
      username: 'username0',
    },
    {
      encrypted: false,
      password: 'password4',
      url: 'url4',
      username: 'username0',
    }
  ],
  publicUrls: [
    {
      encrypted: false,
      password: 'password6',
      url: 'url6',
      username: 'username2',
    },
    {
      encrypted: false,
      password: 'password6',
      url: 'url6',
      username: 'username2',
    }
  ],
};
```

