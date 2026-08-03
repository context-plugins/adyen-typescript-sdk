
# Poi System Data 1

Information related to the POI System.
Returned if the response result is Success.

*This model accepts additional fields of type unknown.*

## Structure

`PoiSystemData1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `dateTime` | `string` | Required | Date and Time. In the response, the POI System gives its date and time to the Sale System. |
| `poiSoftware` | [`PoiSoftware1`](../../doc/models/poi-software-1.md) | Required | - |
| `poiStatus` | [`PoiStatus2 \| undefined`](../../doc/models/poi-status-2.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GlobalStatus1, PoiSystemData1, PrinterStatus1 } from 'adyenlib';

const poiSystemData1: PoiSystemData1 = {
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
};
```

