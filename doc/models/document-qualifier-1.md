
# Document Qualifier 1

Qualification of the document to print to the Cashier or the Customer.
SaleReceipt or CashierReceipt.
Possible values:

* **CashierReceipt**
* **CustomerReceipt**
* **Document**
* **Journal**
* **SaleReceipt**
* **Voucher**

## Enumeration

`DocumentQualifier1`

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
import { DocumentQualifier1 } from 'adyen';

const documentQualifier1 = DocumentQualifier1.SaleReceipt;
```

