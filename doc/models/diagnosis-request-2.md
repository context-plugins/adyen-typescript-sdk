
# Diagnosis Request 2

Content of the Diagnosis Request message.

*This model accepts additional fields of type unknown.*

## Structure

`DiagnosisRequest2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `poiid` | `string \| undefined` | Optional | Identification of a POI System or a POI Terminal for the Sale to POI protocol.<br>MessageHeader.POIID.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `hostDiagnosisFlag` | `boolean \| undefined` | Optional | Indicates if Host Diagnosis are required.<br><br>**Default**: `false` |
| `acquirerId` | `number[] \| undefined` | Optional | Identification of the Acquirer.<br>Present if requesting the diagnosis of these hosts only. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DiagnosisRequest2 } from 'adyen';

const diagnosisRequest2: DiagnosisRequest2 = {
  poiid: 'POIID6',
  hostDiagnosisFlag: false,
  acquirerId: [
    70
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

