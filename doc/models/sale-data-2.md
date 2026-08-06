
# Sale Data 2

*This model accepts additional fields of type unknown.*

## Structure

`SaleData2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operatorId` | `string \| undefined` | Optional | Identification of the Cashier or Operator.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `operatorLanguage` | `string \| undefined` | Optional | Language of the Cashier or Operator.<br>If different from the Login.<br><br>**Constraints**: *Pattern*: `^[a-z]{2,2}$` |
| `shiftNumber` | `string \| undefined` | Optional | Shift number.<br>If different from the Login, see Login SaleData.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `saleTransactionId` | [`SaleTransactionId`](../../doc/models/sale-transaction-id.md) | Required | - |
| `saleReferenceId` | `string \| undefined` | Optional | Identification of a Sale global transaction for a sequence of related POI transactions.<br>If payment reservation.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `saleTerminalData` | [`SaleTerminalData3 \| undefined`](../../doc/models/sale-terminal-data-3.md) | Optional | - |
| `tokenRequestedType` | [`TokenRequestedType1 \| undefined`](../../doc/models/token-requested-type-1.md) | Optional | - |
| `customerOrderId` | `string \| undefined` | Optional | Additional and optional identification of a customer order.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `customerOrderReq` | [`CustomerOrderReq[] \| undefined`](../../doc/models/customer-order-req.md) | Optional | List of customer order open, closed or both to be sent in the response messages.<br>Possible values:<br><br>* **Both**<br>* **Closed**<br>* **Open** |
| `saleToPoiData` | `string \| undefined` | Optional | Sale information intended for the POI.<br>Stored with the transaction.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `saleToAcquirerData` | `string \| undefined` | Optional | Sale information intended for the Acquirer.<br>Send to the Acquirer if present.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `saleToIssuerData` | [`SaleToIssuerData2 \| undefined`](../../doc/models/sale-to-issuer-data-2.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SaleData2 } from 'adyen';

const saleData2: SaleData2 = {
  saleTransactionId: {
    transactionId: 'TransactionID2',
    timeStamp: '2016-03-13T12:52:32.123Z',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  operatorId: 'OperatorID4',
  operatorLanguage: 'OperatorLanguage8',
  shiftNumber: 'ShiftNumber6',
  saleReferenceId: 'SaleReferenceID2',
  saleTerminalData: {
    totalsGroupId: 'TotalsGroupID4',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

