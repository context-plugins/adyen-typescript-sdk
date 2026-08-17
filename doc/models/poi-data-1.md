
# POI Data 1

Data related to the POI System.

## Structure

`POIData1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pOITransactionID` | [`TransactionIDType2`](../../doc/models/transaction-id-type-2.md) | Required | Unique identification of a POI transaction for a POI. |
| `pOIReconciliationID` | `number \| undefined` | Optional | Identification of the reconciliation period between Sale and POI.<br>If Result is Success. |

## Example

```ts
import { POIData1 } from 'adyen';

const pOIData1: POIData1 = {
  pOITransactionID: {
    transactionID: 'TransactionID2',
    timeStamp: '2016-03-13T12:52:32.123Z',
  },
  pOIReconciliationID: 66,
};
```

