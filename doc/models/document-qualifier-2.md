
# Document Qualifier 2

Qualification of the document to print to the Cashier or the Customer. Allows the manager of the printer, Sale or POI Terminal, to send information to a physical printer or to use the paper type accordingly.
Possible values:

* **CashierReceipt**
* **CustomerReceipt**
* **Document**
* **Journal**
* **SaleReceipt**
* **Voucher**

## Enumeration

`DocumentQualifier2`

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
import { DocumentQualifier2 } from 'adyenlib';

const documentQualifier2 = DocumentQualifier2.SaleReceipt;
```

