
# POI Data 4

Data related to the POI System.
If Result is Success.

## Structure

`POIData4`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pOITransactionID` | [`TransactionIDType2`](../../doc/models/transaction-id-type-2.md) | Required | Unique identification of a POI transaction for a POI. |
| `pOIReconciliationID` | `number \| undefined` | Optional | Identification of the reconciliation period between Sale and POI.<br>If Result is Success. |

## Example

```ts
import { POIData4 } from 'adyen';

const pOIData4: POIData4 = {
  pOITransactionID: {
    transactionID: 'TransactionID2',
    timeStamp: '2016-03-13T12:52:32.123Z',
  },
  pOIReconciliationID: 148,
};
```

