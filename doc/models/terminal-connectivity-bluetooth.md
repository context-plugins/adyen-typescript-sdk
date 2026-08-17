
# Terminal Connectivity Bluetooth

## Structure

`TerminalConnectivityBluetooth`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ipAddress` | `string \| undefined` | Optional | The terminal's Bluetooth IP address. |
| `macAddress` | `string \| undefined` | Optional | The terminal's Bluetooth MAC address. |

## Example

```ts
import { TerminalConnectivityBluetooth } from 'adyen';

const terminalConnectivityBluetooth: TerminalConnectivityBluetooth = {
  ipAddress: 'ipAddress6',
  macAddress: 'macAddress8',
};
```

