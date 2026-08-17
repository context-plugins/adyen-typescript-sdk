
# Sale Terminal Data 1

Information related to the software and hardware features of the Sale Terminal.
If content is not empty.

## Structure

`SaleTerminalData1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `totalsGroupID` | `string \| undefined` | Optional | Identification of a group of transactions on a POI Terminal, having the same Sale features.<br>Could be used to group POI for reconciliation or other purpose defined by the Sale System. The default value is assigned by the Login Request.<br><br>**Constraints**: *Pattern*: `^.{1,16}$` |

## Example

```ts
import { SaleTerminalData1 } from 'adyen';

const saleTerminalData1: SaleTerminalData1 = {
  totalsGroupID: 'TotalsGroupID6',
};
```

