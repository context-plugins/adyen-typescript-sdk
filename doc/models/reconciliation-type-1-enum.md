
# Reconciliation Type 1 Enum

Type of Reconciliation requested by the Sale to the POI.
Possible values:

* **AcquirerReconciliation**
* **AcquirerSynchronisation**
* **PreviousReconciliation**
* **SaleReconciliation**

## Enumeration

`ReconciliationType1Enum`

## Fields

| Name |
|  --- |
| `SaleReconciliation` |
| `AcquirerSynchronisation` |
| `AcquirerReconciliation` |
| `PreviousReconciliation` |

## Example

```ts
import { ReconciliationType1Enum } from 'adyen';

const reconciliationType1 = ReconciliationType1Enum.SaleReconciliation;
```

