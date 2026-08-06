
# Terminal

*This model accepts additional fields of type unknown.*

## Structure

`Terminal`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `assignment` | [`TerminalAssignment \| undefined`](../../doc/models/terminal-assignment.md) | Optional | - |
| `cloudDeviceApiEndpoint` | `string \| undefined` | Optional | The [regional base URL](https://docs.adyen.com/api-explorer/terminal-api/1/overview#endpoints-for-cloud-communications) to use for sending Terminal API requests when using cloud communications. |
| `connectivity` | [`TerminalConnectivity \| undefined`](../../doc/models/terminal-connectivity.md) | Optional | - |
| `countryCode` | `string \| undefined` | Optional | The country code of the country where the terminal is located. |
| `firmwareVersion` | `string \| undefined` | Optional | The software release currently in use on the terminal. |
| `id` | `string \| undefined` | Optional | The unique identifier of the terminal. |
| `installedApKs` | [`InstalledApKs[] \| undefined`](../../doc/models/installed-ap-ks.md) | Optional | A list of Android apps installed on the terminal. |
| `lastActivityAt` | `string \| undefined` | Optional | Date and time of the last activity on the terminal. Not included when the last activity was more than 14 days ago. |
| `lastTransactionAt` | `string \| undefined` | Optional | Date and time of the last transaction on the terminal. Not included when the last transaction was more than 14 days ago. |
| `model` | `string \| undefined` | Optional | The model name of the terminal. |
| `restartLocalTime` | `string \| undefined` | Optional | The exact time of the terminal reboot, in the timezone of the terminal in **HH:mm** format. |
| `serialNumber` | `string \| undefined` | Optional | The serial number of the terminal. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Status24, Status32, Terminal } from 'adyen';

const terminal: Terminal = {
  assignment: {
    companyId: 'companyId6',
    status: Status24.Inventory,
    merchantId: 'merchantId2',
    reassignmentTarget: {
      inventory: false,
      companyId: 'companyId4',
      merchantId: 'merchantId0',
      storeId: 'storeId8',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    storeId: 'storeId0',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  cloudDeviceApiEndpoint: 'cloudDeviceApiEndpoint4',
  connectivity: {
    bluetooth: {
      ipAddress: 'ipAddress2',
      macAddress: 'macAddress2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    cellular: {
      iccid: 'iccid6',
      iccid2: 'iccid24',
      status: Status32.Deprecated,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    ethernet: {
      ipAddress: 'ipAddress2',
      linkNegotiation: 'linkNegotiation6',
      macAddress: 'macAddress2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    wifi: {
      ipAddress: 'ipAddress8',
      macAddress: 'macAddress6',
      ssid: 'ssid4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  countryCode: 'countryCode2',
  firmwareVersion: 'firmwareVersion4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

