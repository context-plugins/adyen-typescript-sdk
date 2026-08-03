
# Get Totals Request

It conveys information from the Sale System related to the scope and the format of the totals to be computed by the POI System.
Content of the Get Totals Request message.

*This model accepts additional fields of type unknown.*

## Structure

`GetTotalsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `totalDetails` | [`TotalDetail[] \| undefined`](../../doc/models/total-detail.md) | Optional | Indicates the hierarchical structure of the reconciliation result of the Sale to POI reconciliation.<br>Required to present totals per value of element included in this cluster (POI Terminal, Sale Terminal, Cashier, Shift, TotalsGroupID).<br>Possible values:<br><br>* **OperatorID**<br>* **POIID**<br>* **SaleID**<br>* **ShiftNumber**<br>* **TotalsGroupID** |
| `totalFilter` | [`TotalFilter \| undefined`](../../doc/models/total-filter.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GetTotalsRequest, TotalDetail } from 'adyenlib';

const getTotalsRequest: GetTotalsRequest = {
  totalDetails: [
    TotalDetail.Poiid,
    TotalDetail.TotalsGroupId,
    TotalDetail.ShiftNumber
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

