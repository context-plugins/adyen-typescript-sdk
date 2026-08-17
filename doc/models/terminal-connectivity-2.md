
# Terminal Connectivity 2

Information about bluetooth, cellular, ethernet and wifi connectivity for the terminal.

## Structure

`TerminalConnectivity2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bluetooth` | [`TerminalConnectivityBluetooth \| undefined`](../../doc/models/terminal-connectivity-bluetooth.md) | Optional | - |
| `cellular` | [`TerminalConnectivityCellular \| undefined`](../../doc/models/terminal-connectivity-cellular.md) | Optional | - |
| `ethernet` | [`TerminalConnectivityEthernet \| undefined`](../../doc/models/terminal-connectivity-ethernet.md) | Optional | - |
| `wifi` | [`TerminalConnectivityWifi \| undefined`](../../doc/models/terminal-connectivity-wifi.md) | Optional | - |

## Example

```ts
import { Status31Enum, TerminalConnectivity2 } from 'adyen';

const terminalConnectivity2: TerminalConnectivity2 = {
  bluetooth: {
    ipAddress: 'ipAddress2',
    macAddress: 'macAddress2',
  },
  cellular: {
    iccid: 'iccid6',
    iccid2: 'iccid24',
    status: Status31Enum.Deprecated,
  },
  ethernet: {
    ipAddress: 'ipAddress2',
    linkNegotiation: 'linkNegotiation6',
    macAddress: 'macAddress2',
  },
  wifi: {
    ipAddress: 'ipAddress8',
    macAddress: 'macAddress6',
    ssid: 'ssid4',
  },
};
```

