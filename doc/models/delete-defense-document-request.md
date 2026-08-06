
# Delete Defense Document Request

*This model accepts additional fields of type unknown.*

## Structure

`DeleteDefenseDocumentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `defenseDocumentType` | `string` | Required | The document type code of the defense document. |
| `disputePspReference` | `string` | Required | The PSP reference assigned to the dispute. |
| `merchantAccountCode` | `string` | Required | The merchant account identifier, for which you want to process the dispute transaction. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DeleteDefenseDocumentRequest } from 'adyen';

const deleteDefenseDocumentRequest: DeleteDefenseDocumentRequest = {
  defenseDocumentType: 'defenseDocumentType4',
  disputePspReference: 'disputePspReference6',
  merchantAccountCode: 'merchantAccountCode8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

