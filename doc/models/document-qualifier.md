
# Document Qualifier

Possible values:

* **SaleReceipt**
* **CashierReceipt**
* **CustomerReceipt**
* **Document**
* **Voucher**
* **Journal**

## Enumeration

`DocumentQualifier`

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
import { DocumentQualifier } from 'adyen';

const documentQualifier = DocumentQualifier.Voucher;
```

