
# Total Filter 2

Filter to compute the totals.
Used for the Get Totals, to request totals for a (or a combination of) particular value of the POI Terminal, Sale Terminal, Cashier, Shift, or TotalsGroupID.

## Structure

`TotalFilter2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pOIID` | `string \| undefined` | Optional | Identification of a POI System or a POI Terminal for the Sale to POI protocol.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `saleID` | `string \| undefined` | Optional | Identification of a Sale System or a Sale Terminal for the Sale to POI protocol.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `operatorID` | `string \| undefined` | Optional | Identification of the Cashier or Operator.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `shiftNumber` | `string \| undefined` | Optional | Shift number.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `totalsGroupID` | `string \| undefined` | Optional | Sent if totals in the response have to be computed only for this particular value of TotalsGroupID.<br><br>**Constraints**: *Pattern*: `^.{1,16}$` |

## Example

```ts
import { TotalFilter2 } from 'adyen';

const totalFilter2: TotalFilter2 = {
  pOIID: 'POIID4',
  saleID: 'SaleID8',
  operatorID: 'OperatorID8',
  shiftNumber: 'ShiftNumber0',
  totalsGroupID: 'TotalsGroupID0',
};
```

