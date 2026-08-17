
# Diagnosis Response 2

Content of the Diagnosis Response message.

## Structure

`DiagnosisResponse2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `response` | [`Response11`](../../doc/models/response-11.md) | Required | Result of a message request processing. |
| `pOIStatus` | [`POIStatus1 \| undefined`](../../doc/models/poi-status-1.md) | Optional | State of a POI Terminal.<br>If `Response.Result` is Success. |
| `hostStatus` | [`HostStatus[] \| undefined`](../../doc/models/host-status.md) | Optional | State of a Host. |

## Example

```ts
import {
  DiagnosisResponse2,
  ErrorCondition1Enum,
  GlobalStatus1Enum,
  PrinterStatus1Enum,
  Result11Enum,
} from 'adyen';

const diagnosisResponse2: DiagnosisResponse2 = {
  response: {
    result: Result11Enum.Partial,
    errorCondition: ErrorCondition1Enum.PaymentRestriction,
    additionalResponse: 'AdditionalResponse8',
  },
  pOIStatus: {
    globalStatus: GlobalStatus1Enum.Maintenance,
    securityOKFlag: false,
    pEDOKFlag: false,
    cardReaderOKFlag: false,
    printerStatus: PrinterStatus1Enum.PaperLow,
    communicationOKFlag: false,
  },
  hostStatus: [
    {
      acquirerID: 120,
      isReachableFlag: false,
    },
    {
      acquirerID: 120,
      isReachableFlag: false,
    },
    {
      acquirerID: 120,
      isReachableFlag: false,
    }
  ],
};
```

