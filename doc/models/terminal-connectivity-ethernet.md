
# Terminal Connectivity Ethernet

*This model accepts additional fields of type unknown.*

## Structure

`TerminalConnectivityEthernet`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ipAddress` | `string \| undefined` | Optional | The terminal's ethernet IP address. |
| `linkNegotiation` | `string \| undefined` | Optional | The ethernet link negotiation that the terminal uses. |
| `macAddress` | `string \| undefined` | Optional | The terminal's ethernet MAC address. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TerminalConnectivityEthernet } from 'adyenlib';

const terminalConnectivityEthernet: TerminalConnectivityEthernet = {
  ipAddress: 'ipAddress0',
  linkNegotiation: 'linkNegotiation4',
  macAddress: 'macAddress4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

