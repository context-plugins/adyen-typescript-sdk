
# POI Data

Data related to the POI System.
In the Message Response, identification of the POI transaction.

## Structure

`POIData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pOITransactionID` | [`TransactionIDType2`](../../doc/models/transaction-id-type-2.md) | Required | Unique identification of a POI transaction for a POI. |
| `pOIReconciliationID` | `number \| undefined` | Optional | Identification of the reconciliation period between Sale and POI.<br>If Result is Success. |

## Example

```ts
import { POIData } from 'adyen';

const pOIData: POIData = {
  pOITransactionID: {
    transactionID: 'TransactionID2',
    timeStamp: '2016-03-13T12:52:32.123Z',
  },
  pOIReconciliationID: 208,
};
```

