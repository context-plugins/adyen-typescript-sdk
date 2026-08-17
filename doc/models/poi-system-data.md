
# POI System Data

## Structure

`POISystemData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `dateTime` | `string` | Required | Date and Time. In the response, the POI System gives its date and time to the Sale System. |
| `pOISoftware` | [`POISoftware`](../../doc/models/poi-software.md) | Required | Information related to the software of the POI System which manages the Sale to POI protocol. In a session allows identifying the product features of a POI System. |
| `pOIStatus` | [`POIStatus \| undefined`](../../doc/models/poi-status.md) | Optional | Indicate the availability of the POI Terminal components. The data element is absent if the component is not part of the POI Terminal.<br>State of a POI Terminal. |

## Example

```ts
import { GlobalStatus1Enum, POISystemData, PrinterStatus1Enum } from 'adyen';

const pOISystemData: POISystemData = {
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
};
```

