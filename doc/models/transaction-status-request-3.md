
# Transaction Status Request 3

*This model accepts additional fields of type unknown.*

## Structure

`TransactionStatusRequest3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `messageReference` | [`MessageReference1 \| undefined`](../../doc/models/message-reference-1.md) | Optional | - |
| `receiptReprintFlag` | `boolean \| undefined` | Optional | Request to reprint the POI receipt(s). Allows reprinting a receipt with a `TransactionStatus` message<br><br>**Default**: `false` |
| `documentQualifier` | [`DocumentQualifier[] \| undefined`](../../doc/models/document-qualifier.md) | Optional | Qualification of the document to print to the Cashier or the Customer. Allows the manager of the printer, Sale or POI Terminal, to send the information to a particular physical printer or to use the paper type accordingly.<br>Possible values:<br><br>* **CashierReceipt**<br>* **CustomerReceipt**<br>* **Document**<br>* **Journal**<br>* **SaleReceipt**<br>* **Voucher** |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  DocumentQualifier,
  MessageCategory2,
  TransactionStatusRequest3,
} from 'adyen';

const transactionStatusRequest3: TransactionStatusRequest3 = {
  messageReference: {
    messageCategory: MessageCategory2.Payment,
    serviceId: 'ServiceID0',
    deviceId: 'DeviceID2',
    saleId: 'SaleID8',
    poiid: 'POIID2',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  receiptReprintFlag: false,
  documentQualifier: [
    DocumentQualifier.Journal
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

