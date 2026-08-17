
# Get Totals Request

It conveys information from the Sale System related to the scope and the format of the totals to be computed by the POI System.
Content of the Get Totals Request message.

## Structure

`GetTotalsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `totalDetails` | [`TotalDetailEnum[] \| undefined`](../../doc/models/total-detail-enum.md) | Optional | Indicates the hierarchical structure of the reconciliation result of the Sale to POI reconciliation.<br>Required to present totals per value of element included in this cluster (POI Terminal, Sale Terminal, Cashier, Shift, TotalsGroupID).<br>Possible values:<br><br>* **OperatorID**<br>* **POIID**<br>* **SaleID**<br>* **ShiftNumber**<br>* **TotalsGroupID** |
| `totalFilter` | [`TotalFilter2 \| undefined`](../../doc/models/total-filter-2.md) | Optional | Filter to compute the totals.<br>Used for the Get Totals, to request totals for a (or a combination of) particular value of the POI Terminal, Sale Terminal, Cashier, Shift, or TotalsGroupID. |

## Example

```ts
import { GetTotalsRequest, TotalDetailEnum } from 'adyen';

const getTotalsRequest: GetTotalsRequest = {
  totalDetails: [
    TotalDetailEnum.POIID,
    TotalDetailEnum.TotalsGroupID,
    TotalDetailEnum.ShiftNumber
  ],
  totalFilter: {
    pOIID: 'POIID6',
    saleID: 'SaleID8',
    operatorID: 'OperatorID8',
    shiftNumber: 'ShiftNumber0',
    totalsGroupID: 'TotalsGroupID0',
  },
};
```

