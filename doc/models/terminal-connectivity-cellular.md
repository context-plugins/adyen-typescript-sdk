
# Terminal Connectivity Cellular

## Structure

`TerminalConnectivityCellular`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `iccid` | `string \| undefined` | Optional | The integrated circuit card identifier (ICCID) of the primary SIM card in the terminal. |
| `iccid2` | `string \| undefined` | Optional | The integrated circuit card identifier (ICCID) of the secondary SIM card in the terminal, typically used for a [third-party SIM card](https://docs.adyen.com/point-of-sale/design-your-integration/network-and-connectivity/cellular-failover/#using-a-third-party-sim-card). |
| `status` | [`Status31Enum \| undefined`](../../doc/models/status-31-enum.md) | Optional | On a terminal that supports 3G or 4G connectivity, indicates the status of the primary SIM card in the terminal. |

## Example

```ts
import { Status31Enum, TerminalConnectivityCellular } from 'adyen';

const terminalConnectivityCellular: TerminalConnectivityCellular = {
  iccid: 'iccid8',
  iccid2: 'iccid26',
  status: Status31Enum.ReadyForActivation,
};
```

