
# Login Response 2

Content of the Login Response message.

## Structure

`LoginResponse2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `response` | [`Response11`](../../doc/models/response-11.md) | Required | Result of a message request processing. |
| `pOISystemData` | [`POISystemData1 \| undefined`](../../doc/models/poi-system-data-1.md) | Optional | Information related to the POI System.<br>Returned if the response result is Success. |
| `tokenRequestStatus` | `boolean \| undefined` | Optional | If token is managed by the POI, the status of the token request. |

## Example

```ts
import {
  ErrorCondition1Enum,
  GlobalStatus1Enum,
  LoginResponse2,
  PrinterStatus1Enum,
  Result11Enum,
} from 'adyen';

const loginResponse2: LoginResponse2 = {
  response: {
    result: Result11Enum.Partial,
    errorCondition: ErrorCondition1Enum.PaymentRestriction,
    additionalResponse: 'AdditionalResponse8',
  },
  pOISystemData: {
    dateTime: '2016-03-13T12:52:32.123Z',
    pOISoftware: {
      manufacturerID: 'ManufacturerID4',
      applicationName: 'ApplicationName8',
      softwareVersion: 'SoftwareVersion0',
      certificationCode: 'CertificationCode4',
    },
    pOIStatus: {
      globalStatus: GlobalStatus1Enum.Maintenance,
      securityOKFlag: false,
      pEDOKFlag: false,
      cardReaderOKFlag: false,
      printerStatus: PrinterStatus1Enum.PaperLow,
      communicationOKFlag: false,
    },
  },
  tokenRequestStatus: false,
};
```

