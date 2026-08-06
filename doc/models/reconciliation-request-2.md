
# Reconciliation Request 2

Content of the Reconciliation Request message.

*This model accepts additional fields of type unknown.*

## Structure

`ReconciliationRequest2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `reconciliationType` | [`ReconciliationType1`](../../doc/models/reconciliation-type-1.md) | Required | - |
| `acquirerId` | `number[] \| undefined` | Optional | Identification of the Acquirer.<br>Could be present only if ReconciliationType is AcquirerReconciliation or AcquirerSynchronisation. |
| `poiReconciliationId` | `number \| undefined` | Optional | Identification of the reconciliation period between Sale and POI.<br>Absent if ReconciliationType is not PreviousReconciliation. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ReconciliationRequest2, ReconciliationType1 } from 'adyen';

const reconciliationRequest2: ReconciliationRequest2 = {
  reconciliationType: ReconciliationType1.AcquirerReconciliation,
  acquirerId: [
    122,
    123,
    124
  ],
  poiReconciliationId: 80,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

