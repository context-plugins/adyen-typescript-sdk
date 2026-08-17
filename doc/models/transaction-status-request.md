
# Transaction Status Request

Content of the TransactionStatus Request message.
It conveys Information requested for status of the last or current Payment, Loyalty or Reversal transaction.

## Structure

`TransactionStatusRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `messageReference` | [`MessageReference2 \| undefined`](../../doc/models/message-reference-2.md) | Optional | Identification of a previous POI transaction.<br>Present if it contains any data. |
| `receiptReprintFlag` | `boolean \| undefined` | Optional | Request to reprint the POI receipt(s). Allows reprinting a receipt with a `TransactionStatus` message<br><br>**Default**: `false` |
| `documentQualifier` | [`DocumentQualifierEnum[] \| undefined`](../../doc/models/document-qualifier-enum.md) | Optional | Qualification of the document to print to the Cashier or the Customer. Allows the manager of the printer, Sale or POI Terminal, to send the information to a particular physical printer or to use the paper type accordingly.<br>Possible values:<br><br>* **CashierReceipt**<br>* **CustomerReceipt**<br>* **Document**<br>* **Journal**<br>* **SaleReceipt**<br>* **Voucher** |

## Example

```ts
import {
  DocumentQualifierEnum,
  MessageCategory2Enum,
  TransactionStatusRequest,
} from 'adyen';

const transactionStatusRequest: TransactionStatusRequest = {
  messageReference: {
    messageCategory: MessageCategory2Enum.Payment,
    serviceID: 'ServiceID0',
    deviceID: 'DeviceID2',
    saleID: 'SaleID8',
    pOIID: 'POIID2',
  },
  receiptReprintFlag: false,
  documentQualifier: [
    DocumentQualifierEnum.Document,
    DocumentQualifierEnum.Voucher
  ],
};
```

