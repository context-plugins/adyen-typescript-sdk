
# Get Totals Request 3

*This model accepts additional fields of type unknown.*

## Structure

`GetTotalsRequest3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `totalDetails` | [`TotalDetail[] \| undefined`](../../doc/models/total-detail.md) | Optional | Indicates the hierarchical structure of the reconciliation result of the Sale to POI reconciliation.<br>Required to present totals per value of element included in this cluster (POI Terminal, Sale Terminal, Cashier, Shift, TotalsGroupID).<br>Possible values:<br><br>* **OperatorID**<br>* **POIID**<br>* **SaleID**<br>* **ShiftNumber**<br>* **TotalsGroupID** |
| `totalFilter` | [`TotalFilter \| undefined`](../../doc/models/total-filter.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GetTotalsRequest3, TotalDetail } from 'adyenlib';

const getTotalsRequest3: GetTotalsRequest3 = {
  totalDetails: [
    TotalDetail.TotalsGroupId,
    TotalDetail.Poiid,
    TotalDetail.SaleId
  ],
  totalFilter: {
    poiid: 'POIID6',
    saleId: 'SaleID8',
    operatorId: 'OperatorID8',
    shiftNumber: 'ShiftNumber0',
    totalsGroupId: 'TotalsGroupID0',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

