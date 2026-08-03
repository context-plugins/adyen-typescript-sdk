
# Reconciliation Type 1

Type of Reconciliation requested by the Sale to the POI.
Possible values:

* **AcquirerReconciliation**
* **AcquirerSynchronisation**
* **PreviousReconciliation**
* **SaleReconciliation**

## Enumeration

`ReconciliationType1`

## Fields

| Name |
|  --- |
| `SaleReconciliation` |
| `AcquirerSynchronisation` |
| `AcquirerReconciliation` |
| `PreviousReconciliation` |

## Example

```ts
import { ReconciliationType1 } from 'adyenlib';

const reconciliationType1 = ReconciliationType1.SaleReconciliation;
```

