
# Reconciliation Request

Content of the Reconciliation Request message.
It conveys Information related to the Reconciliation requested by the Sale System.

*This model accepts additional fields of type unknown.*

## Structure

`ReconciliationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `reconciliationType` | [`ReconciliationType1`](../../doc/models/reconciliation-type-1.md) | Required | - |
| `acquirerId` | `number[] \| undefined` | Optional | Identification of the Acquirer.<br>Could be present only if ReconciliationType is AcquirerReconciliation or AcquirerSynchronisation. |
| `poiReconciliationId` | `number \| undefined` | Optional | Identification of the reconciliation period between Sale and POI.<br>Absent if ReconciliationType is not PreviousReconciliation. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ReconciliationRequest, ReconciliationType1 } from 'adyen';

const reconciliationRequest: ReconciliationRequest = {
  reconciliationType: ReconciliationType1.AcquirerReconciliation,
  acquirerId: [
    62,
    63,
    64
  ],
  poiReconciliationId: 20,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

