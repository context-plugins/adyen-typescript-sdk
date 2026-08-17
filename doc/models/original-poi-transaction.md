
# Original POI Transaction

Identification of a previous POI transaction.
In the Payment Request message, it allows using the card of a previous CardAcquisition or Payment request.

## Structure

`OriginalPOITransaction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `saleID` | `string \| undefined` | Optional | Identification of a Sale System for the NEXO SaletoPOI protocol.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `pOIID` | `string \| undefined` | Optional | Identification of a payment terminal for the NEXO SaletoPOI protocol.<br>If original transaction is coming from another POI.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `pOITransactionID` | [`TransactionIDType4 \| undefined`](../../doc/models/transaction-id-type-4.md) | Optional | Unique identification of a POI transaction for a POI.<br>Absent if SaleReferenceID is sufficient to identify the transaction. |
| `reuseCardDataFlag` | `boolean \| undefined` | Optional | Indicates if the card data has to be retrieved from a previous transaction.<br><br>**Default**: `true` |
| `approvalCode` | `string \| undefined` | Optional | Code assigned to a transaction approval by the Acquirer.<br>If referral.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `acquirerID` | `number \| undefined` | Optional | Identification of the Acquirer.<br>Restrict to the Acquirer if present. |
| `amountValue` | `number \| undefined` | Optional | Value of an amount.<br><br>**Constraints**: `>= 0`, `<= 99999999.999999` |
| `hostTransactionID` | [`TransactionIDType5 \| undefined`](../../doc/models/transaction-id-type-5.md) | Optional | Identification of the transaction by the host in charge of the stored value transaction.<br>If POITransactionID not present. |

## Example

```ts
import { OriginalPOITransaction } from 'adyen';

const originalPOITransaction: OriginalPOITransaction = {
  saleID: 'SaleID4',
  pOIID: 'POIID0',
  pOITransactionID: {
    transactionID: 'TransactionID2',
    timeStamp: '2016-03-13T12:52:32.123Z',
  },
  reuseCardDataFlag: true,
  approvalCode: 'ApprovalCode0',
};
```

