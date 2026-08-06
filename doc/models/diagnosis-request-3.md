
# Diagnosis Request 3

*This model accepts additional fields of type unknown.*

## Structure

`DiagnosisRequest3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `poiid` | `string \| undefined` | Optional | Identification of a POI System or a POI Terminal for the Sale to POI protocol.<br>MessageHeader.POIID.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `hostDiagnosisFlag` | `boolean \| undefined` | Optional | Indicates if Host Diagnosis are required.<br><br>**Default**: `false` |
| `acquirerId` | `number[] \| undefined` | Optional | Identification of the Acquirer.<br>Present if requesting the diagnosis of these hosts only. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DiagnosisRequest3 } from 'adyen';

const diagnosisRequest3: DiagnosisRequest3 = {
  poiid: 'POIID4',
  hostDiagnosisFlag: false,
  acquirerId: [
    138,
    139
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

