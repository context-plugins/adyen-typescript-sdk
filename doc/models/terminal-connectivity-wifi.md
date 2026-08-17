
# Terminal Connectivity Wifi

## Structure

`TerminalConnectivityWifi`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ipAddress` | `string \| undefined` | Optional | The terminal's IP address in the Wi-Fi network. |
| `macAddress` | `string \| undefined` | Optional | The terminal's MAC address in the Wi-Fi network. |
| `ssid` | `string \| undefined` | Optional | The SSID of the Wi-Fi network that the terminal is connected to. |

## Example

```ts
import { TerminalConnectivityWifi } from 'adyen';

const terminalConnectivityWifi: TerminalConnectivityWifi = {
  ipAddress: 'ipAddress0',
  macAddress: 'macAddress6',
  ssid: 'ssid8',
};
```

