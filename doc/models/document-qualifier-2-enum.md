
# Document Qualifier 2 Enum

Qualification of the document to print to the Cashier or the Customer. Allows the manager of the printer, Sale or POI Terminal, to send information to a physical printer or to use the paper type accordingly.
Possible values:

* **CashierReceipt**
* **CustomerReceipt**
* **Document**
* **Journal**
* **SaleReceipt**
* **Voucher**

## Enumeration

`DocumentQualifier2Enum`

## Fields

| Name |
|  --- |
| `SaleReceipt` |
| `CashierReceipt` |
| `CustomerReceipt` |
| `Document` |
| `Voucher` |
| `Journal` |

## Example

```ts
import { DocumentQualifier2Enum } from 'adyen';

const documentQualifier2 = DocumentQualifier2Enum.SaleReceipt;
```

