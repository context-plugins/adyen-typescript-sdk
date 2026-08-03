
# Legal Arrangement Request

*This model accepts additional fields of type unknown.*

## Structure

`LegalArrangementRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `legalArrangementCode` | `string` | Required | The code of the legal arrangement to be deleted. If you also send `legalArrangementEntityCodes`, only the entities listed will be deleted. |
| `legalArrangementEntityCodes` | `string[] \| undefined` | Optional | List of legal arrangement entities to be deleted. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { LegalArrangementRequest } from 'adyenlib';

const legalArrangementRequest: LegalArrangementRequest = {
  legalArrangementCode: 'legalArrangementCode0',
  legalArrangementEntityCodes: [
    'legalArrangementEntityCodes6',
    'legalArrangementEntityCodes7'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

