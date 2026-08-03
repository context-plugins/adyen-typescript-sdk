
# Terminal Connectivity Bluetooth

*This model accepts additional fields of type unknown.*

## Structure

`TerminalConnectivityBluetooth`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ipAddress` | `string \| undefined` | Optional | The terminal's Bluetooth IP address. |
| `macAddress` | `string \| undefined` | Optional | The terminal's Bluetooth MAC address. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TerminalConnectivityBluetooth } from 'adyenlib';

const terminalConnectivityBluetooth: TerminalConnectivityBluetooth = {
  ipAddress: 'ipAddress6',
  macAddress: 'macAddress8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

