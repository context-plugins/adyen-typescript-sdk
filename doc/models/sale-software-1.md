
# Sale Software 1

Information related to the software of the Sale System which manages the Sale to POI protocol.

## Structure

`SaleSoftware1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `manufacturerID` | `string` | Required | Identification of the Manufacturer.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `applicationName` | `string` | Required | Name of the software product.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `softwareVersion` | `string` | Required | Version of the software product.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `certificationCode` | `string` | Required | Certification code of the software which manages the Sale to POI protocol.<br><br>**Constraints**: *Pattern*: `^.+$` |

## Example

```ts
import { SaleSoftware1 } from 'adyen';

const saleSoftware1: SaleSoftware1 = {
  manufacturerID: 'ManufacturerID0',
  applicationName: 'ApplicationName2',
  softwareVersion: 'SoftwareVersion6',
  certificationCode: 'CertificationCode0',
};
```

