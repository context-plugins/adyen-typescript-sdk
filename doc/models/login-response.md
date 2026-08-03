
# Login Response

It conveys Information related to the Login to process.
Content of the Login Response message.

*This model accepts additional fields of type unknown.*

## Structure

`LoginResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `response` | [`Response3`](../../doc/models/response-3.md) | Required | - |
| `poiSystemData` | [`PoiSystemData \| undefined`](../../doc/models/poi-system-data.md) | Optional | - |
| `tokenRequestStatus` | `boolean \| undefined` | Optional | If token is managed by the POI, the status of the token request. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  ErrorCondition1,
  GlobalStatus1,
  LoginResponse,
  PrinterStatus1,
  Result11,
} from 'adyenlib';

const loginResponse: LoginResponse = {
  response: {
    result: Result11.Partial,
    errorCondition: ErrorCondition1.PaymentRestriction,
    additionalResponse: 'AdditionalResponse8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  poiSystemData: {
    dateTime: '2016-03-13T12:52:32.123Z',
    poiSoftware: {
      manufacturerId: 'ManufacturerID4',
      applicationName: 'ApplicationName8',
      softwareVersion: 'SoftwareVersion0',
      certificationCode: 'CertificationCode4',
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
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  tokenRequestStatus: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

