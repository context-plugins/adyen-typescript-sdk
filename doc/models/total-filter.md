
# Total Filter

## Structure

`TotalFilter`

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
import { TotalFilter } from 'adyen';

const totalFilter: TotalFilter = {
  pOIID: 'POIID6',
  saleID: 'SaleID2',
  operatorID: 'OperatorID8',
  shiftNumber: 'ShiftNumber0',
  totalsGroupID: 'TotalsGroupID0',
};
```

