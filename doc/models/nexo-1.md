
# Nexo 1

Settings for a Terminal API integration.

*This model accepts additional fields of type unknown.*

## Structure

`Nexo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `displayUrls` | [`NotificationUrl \| undefined`](../../doc/models/notification-url.md) | Optional | - |
| `encryptionKey` | [`Key \| undefined`](../../doc/models/key.md) | Optional | - |
| `eventUrls` | [`EventUrl \| undefined`](../../doc/models/event-url.md) | Optional | - |
| `nexoEventUrls` | `string[] \| undefined` | Optional | One or more URLs to send event messages to when using Terminal API. |
| `notification` | [`Notification \| undefined`](../../doc/models/notification.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Category1, Nexo1 } from 'adyen';

const nexo1: Nexo1 = {
  displayUrls: {
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
      }
    ],
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  encryptionKey: {
    identifier: 'identifier6',
    passphrase: 'passphrase6',
    version: 8,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  eventUrls: {
    eventLocalUrls: [
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
    eventPublicUrls: [
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
  },
  nexoEventUrls: [
    'nexoEventUrls4',
    'nexoEventUrls5'
  ],
  notification: {
    category: Category1.SaleWakeUp,
    details: 'details2',
    enabled: false,
    showButton: false,
    title: 'title2',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

