
# Reconciliation Request 3

*This model accepts additional fields of type unknown.*

## Structure

`ReconciliationRequest3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `reconciliationType` | [`ReconciliationType1`](../../doc/models/reconciliation-type-1.md) | Required | - |
| `acquirerId` | `number[] \| undefined` | Optional | Identification of the Acquirer.<br>Could be present only if ReconciliationType is AcquirerReconciliation or AcquirerSynchronisation. |
| `poiReconciliationId` | `number \| undefined` | Optional | Identification of the reconciliation period between Sale and POI.<br>Absent if ReconciliationType is not PreviousReconciliation. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ReconciliationRequest3, ReconciliationType1 } from 'adyen';

const reconciliationRequest3: ReconciliationRequest3 = {
  reconciliationType: ReconciliationType1.SaleReconciliation,
  acquirerId: [
    248
  ],
  poiReconciliationId: 206,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

