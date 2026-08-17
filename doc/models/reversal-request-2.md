
# Reversal Request 2

Content of the Reversal Request message.

## Structure

`ReversalRequest2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `saleData` | [`SaleData \| undefined`](../../doc/models/sale-data.md) | Optional | Data associated with the Sale System, with a particular value during the processing of the payment by the POI, including the cards acquisition. |
| `originalPOITransaction` | [`OriginalPOITransaction2`](../../doc/models/original-poi-transaction-2.md) | Required | Identification of a previous POI transaction. |
| `reversedAmount` | `number \| undefined` | Optional | Amount of the payment or loyalty to reverse.<br>ReversedAmount is implicitly equal to the AuthorizedAmount if absent.<br><br>**Constraints**: `>= 0`, `<= 99999999.999999` |
| `reversalReason` | [`ReversalReason1Enum`](../../doc/models/reversal-reason-1-enum.md) | Required | Reason of the payment or loyalty reversal.<br>Possible values:<br><br>* **CustCancel**<br>* **Malfunction**<br>* **MerchantCancel**<br>* **Unable2Compl** |

## Example

```ts
import { ReversalReason1Enum, ReversalRequest2 } from 'adyen';

const reversalRequest2: ReversalRequest2 = {
  originalPOITransaction: {
    saleID: 'SaleID6',
    pOIID: 'POIID0',
    pOITransactionID: {
      transactionID: 'TransactionID2',
      timeStamp: '2016-03-13T12:52:32.123Z',
    },
    reuseCardDataFlag: true,
    approvalCode: 'ApprovalCode0',
  },
  reversalReason: ReversalReason1Enum.CustCancel,
  saleData: {
    saleTransactionID: {
      transactionID: 'TransactionID2',
      timeStamp: '2016-03-13T12:52:32.123Z',
    },
    operatorID: 'OperatorID8',
    operatorLanguage: 'OperatorLanguage2',
    shiftNumber: 'ShiftNumber0',
    saleReferenceID: 'SaleReferenceID8',
    saleTerminalData: {
      totalsGroupID: 'TotalsGroupID4',
    },
  },
  reversedAmount: 7.6,
};
```

