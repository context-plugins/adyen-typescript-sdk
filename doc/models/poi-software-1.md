
# Poi Software 1

*This model accepts additional fields of type unknown.*

## Structure

`PoiSoftware1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `manufacturerId` | `string` | Required | Identification of the Manufacturer. Sent in the Login Request (Response) to identify the Sale System (POI System) manufacturer during the session.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `applicationName` | `string` | Required | Name of the software product. Sent in the Login Request (Response) to identify the Sale System (POI System) product name during the session.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `softwareVersion` | `string` | Required | Version of the software product. Sent in the Login Request (Response) to identify the version of the Sale System (POI System) product software during the session.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `certificationCode` | `string` | Required | Certification code of the software which manages the Sale to POI protocol. Sent in the Login Request (Response) to get the certification code of the Sale System (POI System) product software. This code can be a software checksum or any number associated with the software.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PoiSoftware1 } from 'adyenlib';

const poiSoftware1: PoiSoftware1 = {
  manufacturerId: 'ManufacturerID0',
  applicationName: 'ApplicationName2',
  softwareVersion: 'SoftwareVersion6',
  certificationCode: 'CertificationCode0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

