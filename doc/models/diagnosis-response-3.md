
# Diagnosis Response 3

*This model accepts additional fields of type unknown.*

## Structure

`DiagnosisResponse3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `response` | [`Response3`](../../doc/models/response-3.md) | Required | - |
| `poiStatus` | [`PoiStatus2 \| undefined`](../../doc/models/poi-status-2.md) | Optional | - |
| `hostStatus` | [`HostStatus[] \| undefined`](../../doc/models/host-status.md) | Optional | State of a Host. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  DiagnosisResponse3,
  ErrorCondition1,
  GlobalStatus1,
  PrinterStatus1,
  Result11,
} from 'adyen';

const diagnosisResponse3: DiagnosisResponse3 = {
  response: {
    result: Result11.Partial,
    errorCondition: ErrorCondition1.PaymentRestriction,
    additionalResponse: 'AdditionalResponse8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  poiStatus: {
    globalStatus: GlobalStatus1.Maintenance,
    securityOkFlag: false,
    pedokFlag: false,
    cardReaderOkFlag: false,
    printerStatus: PrinterStatus1.PaperLow,
    communicationOkFlag: false,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  hostStatus: [
    {
      acquirerId: 120,
      isReachableFlag: false,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      acquirerId: 120,
      isReachableFlag: false,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      acquirerId: 120,
      isReachableFlag: false,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

