
# Print Response 2

Content of the Print Response message.

## Structure

`PrintResponse2`

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
  PrintResponse2,
  Result11Enum,
} from 'adyen';

const printResponse2: PrintResponse2 = {
  documentQualifier: DocumentQualifier2Enum.CustomerReceipt,
  response: {
    result: Result11Enum.Partial,
    errorCondition: ErrorCondition1Enum.PaymentRestriction,
    additionalResponse: 'AdditionalResponse8',
  },
};
```

