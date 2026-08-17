
# Document Qualifier 1 Enum

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

`DocumentQualifier1Enum`

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
import { DocumentQualifier1Enum } from 'adyen';

const documentQualifier1 = DocumentQualifier1Enum.SaleReceipt;
```

