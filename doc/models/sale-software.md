
# Sale Software

Information related to the software of the Sale System which manages the NEXO Sale to POI protocol.

*This model accepts additional fields of type unknown.*

## Structure

`SaleSoftware`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `manufacturerId` | `string` | Required | Identification of the Manufacturer.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `applicationName` | `string` | Required | Name of the software product.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `softwareVersion` | `string` | Required | Version of the software product.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `certificationCode` | `string` | Required | Certification code of the software which manages the Sale to POI protocol.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SaleSoftware } from 'adyenlib';

const saleSoftware: SaleSoftware = {
  manufacturerId: 'ManufacturerID2',
  applicationName: 'ApplicationName0',
  softwareVersion: 'SoftwareVersion8',
  certificationCode: 'CertificationCode2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

