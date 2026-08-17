
# Sale Data

Data associated with the Sale System, with a particular value during the processing of the payment by the POI, including the cards acquisition.

## Structure

`SaleData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operatorID` | `string \| undefined` | Optional | Identification of the Cashier or Operator.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `operatorLanguage` | `string \| undefined` | Optional | Language of the Cashier or Operator.<br>If different from the Login.<br><br>**Constraints**: *Pattern*: `^[a-z]{2,2}$` |
| `shiftNumber` | `string \| undefined` | Optional | Shift number.<br>If different from the Login, see Login SaleData.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `saleTransactionID` | [`TransactionIDType1`](../../doc/models/transaction-id-type-1.md) | Required | Identification of a Sale transaction. |
| `saleReferenceID` | `string \| undefined` | Optional | Identification of a Sale global transaction for a sequence of related POI transactions.<br>If payment reservation.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `saleTerminalData` | [`SaleTerminalData1 \| undefined`](../../doc/models/sale-terminal-data-1.md) | Optional | Information related to the software and hardware features of the Sale Terminal.<br>If content is not empty. |
| `tokenRequestedType` | [`TokenRequestedType1Enum \| undefined`](../../doc/models/token-requested-type-1-enum.md) | Optional | Type of token replacing the PAN of a payment card to identify the payment<br>mean of the customer. It allows, for a merchant, to use a token for a transaction<br>only or for a longer period.<br>Possible values:<br><br>* **Customer**<br>* **Transaction** |
| `customerOrderID` | `string \| undefined` | Optional | Additional and optional identification of a customer order.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `customerOrderReq` | [`CustomerOrderReqEnum[] \| undefined`](../../doc/models/customer-order-req-enum.md) | Optional | List of customer order open, closed or both to be sent in the response messages.<br>Possible values:<br><br>* **Both**<br>* **Closed**<br>* **Open** |
| `saleToPOIData` | `string \| undefined` | Optional | Sale information intended for the POI.<br>Stored with the transaction.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `saleToAcquirerData` | `string \| undefined` | Optional | Sale information intended for the Acquirer.<br>Send to the Acquirer if present.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `saleToIssuerData` | [`SaleToIssuerData1 \| undefined`](../../doc/models/sale-to-issuer-data-1.md) | Optional | Sale information intended for the Issuer.<br>Send to the Acquirer if present. |

## Example

```ts
import { SaleData } from 'adyen';

const saleData: SaleData = {
  saleTransactionID: {
    transactionID: 'TransactionID2',
    timeStamp: '2016-03-13T12:52:32.123Z',
  },
  operatorID: 'OperatorID6',
  operatorLanguage: 'OperatorLanguage0',
  shiftNumber: 'ShiftNumber8',
  saleReferenceID: 'SaleReferenceID0',
  saleTerminalData: {
    totalsGroupID: 'TotalsGroupID4',
  },
};
```

