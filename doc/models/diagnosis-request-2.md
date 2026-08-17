
# Diagnosis Request 2

Content of the Diagnosis Request message.

## Structure

`DiagnosisRequest2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pOIID` | `string \| undefined` | Optional | Identification of a POI System or a POI Terminal for the Sale to POI protocol.<br>MessageHeader.POIID.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `hostDiagnosisFlag` | `boolean \| undefined` | Optional | Indicates if Host Diagnosis are required.<br><br>**Default**: `false` |
| `acquirerID` | `number[] \| undefined` | Optional | Identification of the Acquirer.<br>Present if requesting the diagnosis of these hosts only. |

## Example

```ts
import { DiagnosisRequest2 } from 'adyen';

const diagnosisRequest2: DiagnosisRequest2 = {
  pOIID: 'POIID6',
  hostDiagnosisFlag: false,
  acquirerID: [
    70
  ],
};
```

