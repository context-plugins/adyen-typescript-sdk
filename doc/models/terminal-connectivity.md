
# Terminal Connectivity

*This model accepts additional fields of type unknown.*

## Structure

`TerminalConnectivity`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bluetooth` | [`TerminalConnectivityBluetooth \| undefined`](../../doc/models/terminal-connectivity-bluetooth.md) | Optional | - |
| `cellular` | [`TerminalConnectivityCellular \| undefined`](../../doc/models/terminal-connectivity-cellular.md) | Optional | - |
| `ethernet` | [`TerminalConnectivityEthernet \| undefined`](../../doc/models/terminal-connectivity-ethernet.md) | Optional | - |
| `wifi` | [`TerminalConnectivityWifi \| undefined`](../../doc/models/terminal-connectivity-wifi.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Status32, TerminalConnectivity } from 'adyenlib';

const terminalConnectivity: TerminalConnectivity = {
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
};
```

