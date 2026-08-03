
# Sale Software 2

*This model accepts additional fields of type unknown.*

## Structure

`SaleSoftware2`

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
import { SaleSoftware2 } from 'adyenlib';

const saleSoftware2: SaleSoftware2 = {
  manufacturerId: 'ManufacturerID6',
  applicationName: 'ApplicationName6',
  softwareVersion: 'SoftwareVersion2',
  certificationCode: 'CertificationCode6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

