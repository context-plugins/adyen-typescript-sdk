
# Reconciliation Request 2

Content of the Reconciliation Request message.

## Structure

`ReconciliationRequest2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `reconciliationType` | [`ReconciliationType1Enum`](../../doc/models/reconciliation-type-1-enum.md) | Required | Type of Reconciliation requested by the Sale to the POI.<br>Possible values:<br><br>* **AcquirerReconciliation**<br>* **AcquirerSynchronisation**<br>* **PreviousReconciliation**<br>* **SaleReconciliation** |
| `acquirerID` | `number[] \| undefined` | Optional | Identification of the Acquirer.<br>Could be present only if ReconciliationType is AcquirerReconciliation or AcquirerSynchronisation. |
| `pOIReconciliationID` | `number \| undefined` | Optional | Identification of the reconciliation period between Sale and POI.<br>Absent if ReconciliationType is not PreviousReconciliation. |

## Example

```ts
import { ReconciliationRequest2, ReconciliationType1Enum } from 'adyen';

const reconciliationRequest2: ReconciliationRequest2 = {
  reconciliationType: ReconciliationType1Enum.AcquirerReconciliation,
  acquirerID: [
    122,
    123,
    124
  ],
  pOIReconciliationID: 80,
};
```

