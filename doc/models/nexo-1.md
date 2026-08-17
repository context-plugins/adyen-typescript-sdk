
# Nexo 1

Settings for a Terminal API integration.

## Structure

`Nexo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `displayUrls` | [`NotificationUrl2 \| undefined`](../../doc/models/notification-url-2.md) | Optional | The list of local and public URLs to send display notifications to when using Terminal API. |
| `encryptionKey` | [`Key1 \| undefined`](../../doc/models/key-1.md) | Optional | The key you share with Adyen to secure local communications when using Terminal API. |
| `eventUrls` | [`EventUrl2 \| undefined`](../../doc/models/event-url-2.md) | Optional | The list of local and public URLs to send event notifications to when using Terminal API. |
| `nexoEventUrls` | `string[] \| undefined` | Optional | One or more URLs to send event messages to when using Terminal API. |
| `notification` | [`Notification2 \| undefined`](../../doc/models/notification-2.md) | Optional | Configures sending event notifications by pressing a button on a terminal, for example used for pay-at-table. |

## Example

```ts
import { CategoryEnum, Nexo1 } from 'adyen';

const nexo1: Nexo1 = {
  displayUrls: {
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
      }
    ],
  },
  encryptionKey: {
    identifier: 'identifier6',
    passphrase: 'passphrase6',
    version: 8,
  },
  eventUrls: {
    eventLocalUrls: [
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
    eventPublicUrls: [
      {
        encrypted: false,
        password: 'password8',
        url: 'url8',
        username: 'username4',
      }
    ],
  },
  nexoEventUrls: [
    'nexoEventUrls4',
    'nexoEventUrls5'
  ],
  notification: {
    category: CategoryEnum.SaleWakeUp,
    details: 'details2',
    enabled: false,
    showButton: false,
    title: 'title2',
  },
};
```

