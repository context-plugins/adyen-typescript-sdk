
# Poi Data 1

Data related to the POI System.

*This model accepts additional fields of type unknown.*

## Structure

`PoiData1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `poiTransactionId` | [`PoiTransactionId`](../../doc/models/poi-transaction-id.md) | Required | - |
| `poiReconciliationId` | `number \| undefined` | Optional | Identification of the reconciliation period between Sale and POI.<br>If Result is Success. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PoiData1 } from 'adyen';

const poiData1: PoiData1 = {
  poiTransactionId: {
    transactionId: 'TransactionID2',
    timeStamp: '2016-03-13T12:52:32.123Z',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  poiReconciliationId: 112,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

