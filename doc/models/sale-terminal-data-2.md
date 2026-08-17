
# Sale Terminal Data 2

Information related to the software and hardware feature of the Sale Terminal.
Present if the login involve a Sale Terminal.

## Structure

`SaleTerminalData2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `totalsGroupID` | `string \| undefined` | Optional | Identification of a group of transactions on a POI Terminal, having the same Sale features.<br>Could be used to group POI for reconciliation or other purpose defined by the Sale System. The default value is assigned by the Login Request.<br><br>**Constraints**: *Pattern*: `^.{1,16}$` |

## Example

```ts
import { SaleTerminalData2 } from 'adyen';

const saleTerminalData2: SaleTerminalData2 = {
  totalsGroupID: 'TotalsGroupID4',
};
```

