
# Poi Data 4

Data related to the POI System.
If Result is Success.

*This model accepts additional fields of type unknown.*

## Structure

`PoiData4`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `poiTransactionId` | [`PoiTransactionId`](../../doc/models/poi-transaction-id.md) | Required | - |
| `poiReconciliationId` | `number \| undefined` | Optional | Identification of the reconciliation period between Sale and POI.<br>If Result is Success. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PoiData4 } from 'adyen';

const poiData4: PoiData4 = {
  poiTransactionId: {
    transactionId: 'TransactionID2',
    timeStamp: '2016-03-13T12:52:32.123Z',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  poiReconciliationId: 252,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

