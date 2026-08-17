
# Reconciliation Request

Content of the Reconciliation Request message.
It conveys Information related to the Reconciliation requested by the Sale System.

## Structure

`ReconciliationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `reconciliationType` | [`ReconciliationType1Enum`](../../doc/models/reconciliation-type-1-enum.md) | Required | Type of Reconciliation requested by the Sale to the POI.<br>Possible values:<br><br>* **AcquirerReconciliation**<br>* **AcquirerSynchronisation**<br>* **PreviousReconciliation**<br>* **SaleReconciliation** |
| `acquirerID` | `number[] \| undefined` | Optional | Identification of the Acquirer.<br>Could be present only if ReconciliationType is AcquirerReconciliation or AcquirerSynchronisation. |
| `pOIReconciliationID` | `number \| undefined` | Optional | Identification of the reconciliation period between Sale and POI.<br>Absent if ReconciliationType is not PreviousReconciliation. |

## Example

```ts
import { ReconciliationRequest, ReconciliationType1Enum } from 'adyen';

const reconciliationRequest: ReconciliationRequest = {
  reconciliationType: ReconciliationType1Enum.AcquirerReconciliation,
  acquirerID: [
    62,
    63,
    64
  ],
  pOIReconciliationID: 20,
};
```

