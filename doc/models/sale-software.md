
# Sale Software

Information related to the software of the Sale System which manages the NEXO Sale to POI protocol.

## Structure

`SaleSoftware`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `manufacturerID` | `string` | Required | Identification of the Manufacturer.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `applicationName` | `string` | Required | Name of the software product.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `softwareVersion` | `string` | Required | Version of the software product.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `certificationCode` | `string` | Required | Certification code of the software which manages the Sale to POI protocol.<br><br>**Constraints**: *Pattern*: `^.+$` |

## Example

```ts
import { SaleSoftware } from 'adyen';

const saleSoftware: SaleSoftware = {
  manufacturerID: 'ManufacturerID2',
  applicationName: 'ApplicationName0',
  softwareVersion: 'SoftwareVersion8',
  certificationCode: 'CertificationCode2',
};
```

