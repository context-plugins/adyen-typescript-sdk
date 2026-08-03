
# Connectivity 1

Settings for terminal connectivity features.

*This model accepts additional fields of type unknown.*

## Structure

`Connectivity1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `simcardStatus` | [`SimcardStatus \| undefined`](../../doc/models/simcard-status.md) | Optional | - |
| `terminalIpAddressUrl` | [`EventUrl \| undefined`](../../doc/models/event-url.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Connectivity1, SimcardStatus } from 'adyenlib';

const connectivity1: Connectivity1 = {
  simcardStatus: SimcardStatus.Activated,
  terminalIpAddressUrl: {
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
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

