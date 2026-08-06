
# Notification Url

*This model accepts additional fields of type unknown.*

## Structure

`NotificationUrl`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localUrls` | [`Url[] \| undefined`](../../doc/models/url.md) | Optional | One or more local URLs to send notifications to when using Terminal API. |
| `publicUrls` | [`Url[] \| undefined`](../../doc/models/url.md) | Optional | One or more public URLs to send notifications to when using Terminal API. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

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
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
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
  publicUrls: [
    {
      encrypted: false,
      password: 'password6',
      url: 'url6',
      username: 'username2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      encrypted: false,
      password: 'password6',
      url: 'url6',
      username: 'username2',
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

