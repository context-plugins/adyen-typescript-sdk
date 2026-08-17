
# Terminal Connectivity Ethernet

## Structure

`TerminalConnectivityEthernet`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ipAddress` | `string \| undefined` | Optional | The terminal's ethernet IP address. |
| `linkNegotiation` | `string \| undefined` | Optional | The ethernet link negotiation that the terminal uses. |
| `macAddress` | `string \| undefined` | Optional | The terminal's ethernet MAC address. |

## Example

```ts
import { TerminalConnectivityEthernet } from 'adyen';

const terminalConnectivityEthernet: TerminalConnectivityEthernet = {
  ipAddress: 'ipAddress0',
  linkNegotiation: 'linkNegotiation4',
  macAddress: 'macAddress4',
};
```

