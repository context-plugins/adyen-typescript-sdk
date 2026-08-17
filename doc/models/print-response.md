
# Print Response

It conveys the result of the print, parallel to the message request, except if response not required and absent.
Content of the Print Response message.

## Structure

`PrintResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `documentQualifier` | [`DocumentQualifier2Enum`](../../doc/models/document-qualifier-2-enum.md) | Required | Qualification of the document to print to the Cashier or the Customer. Allows the manager of the printer, Sale or POI Terminal, to send information to a physical printer or to use the paper type accordingly.<br>Possible values:<br><br>* **CashierReceipt**<br>* **CustomerReceipt**<br>* **Document**<br>* **Journal**<br>* **SaleReceipt**<br>* **Voucher** |
| `response` | [`Response11`](../../doc/models/response-11.md) | Required | Result of a message request processing. |

## Example

```ts
import {
  DocumentQualifier2Enum,
  ErrorCondition1Enum,
  PrintResponse,
  Result11Enum,
} from 'adyen';

const printResponse: PrintResponse = {
  documentQualifier: DocumentQualifier2Enum.SaleReceipt,
  response: {
    result: Result11Enum.Partial,
    errorCondition: ErrorCondition1Enum.PaymentRestriction,
    additionalResponse: 'AdditionalResponse8',
  },
};
```

