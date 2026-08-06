
# Total Filter

*This model accepts additional fields of type unknown.*

## Structure

`TotalFilter`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `poiid` | `string \| undefined` | Optional | Identification of a POI System or a POI Terminal for the Sale to POI protocol.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `saleId` | `string \| undefined` | Optional | Identification of a Sale System or a Sale Terminal for the Sale to POI protocol.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `operatorId` | `string \| undefined` | Optional | Identification of the Cashier or Operator.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `shiftNumber` | `string \| undefined` | Optional | Shift number.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `totalsGroupId` | `string \| undefined` | Optional | Sent if totals in the response have to be computed only for this particular value of TotalsGroupID.<br><br>**Constraints**: *Pattern*: `^.{1,16}$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TotalFilter } from 'adyen';

const totalFilter: TotalFilter = {
  poiid: 'POIID6',
  saleId: 'SaleID2',
  operatorId: 'OperatorID8',
  shiftNumber: 'ShiftNumber0',
  totalsGroupId: 'TotalsGroupID0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

