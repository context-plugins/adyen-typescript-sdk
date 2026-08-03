
# Terminal Connectivity Wifi

*This model accepts additional fields of type unknown.*

## Structure

`TerminalConnectivityWifi`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ipAddress` | `string \| undefined` | Optional | The terminal's IP address in the Wi-Fi network. |
| `macAddress` | `string \| undefined` | Optional | The terminal's MAC address in the Wi-Fi network. |
| `ssid` | `string \| undefined` | Optional | The SSID of the Wi-Fi network that the terminal is connected to. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TerminalConnectivityWifi } from 'adyenlib';

const terminalConnectivityWifi: TerminalConnectivityWifi = {
  ipAddress: 'ipAddress0',
  macAddress: 'macAddress6',
  ssid: 'ssid8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

