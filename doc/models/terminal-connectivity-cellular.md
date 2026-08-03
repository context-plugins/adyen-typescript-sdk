
# Terminal Connectivity Cellular

*This model accepts additional fields of type unknown.*

## Structure

`TerminalConnectivityCellular`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `iccid` | `string \| undefined` | Optional | The integrated circuit card identifier (ICCID) of the primary SIM card in the terminal. |
| `iccid2` | `string \| undefined` | Optional | The integrated circuit card identifier (ICCID) of the secondary SIM card in the terminal, typically used for a [third-party SIM card](https://docs.adyen.com/point-of-sale/design-your-integration/network-and-connectivity/cellular-failover/#using-a-third-party-sim-card). |
| `status` | [`Status32 \| undefined`](../../doc/models/status-32.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Status32, TerminalConnectivityCellular } from 'adyenlib';

const terminalConnectivityCellular: TerminalConnectivityCellular = {
  iccid: 'iccid8',
  iccid2: 'iccid26',
  status: Status32.ReadyForActivation,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

