
# Defense Document

*This model accepts additional fields of type unknown.*

## Structure

`DefenseDocument`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `content` | `string` | Required | The content of the defense document. |
| `contentType` | `string` | Required | The content type of the defense document. |
| `defenseDocumentTypeCode` | `string` | Required | The document type code of the defense document. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DefenseDocument } from 'adyen';

const defenseDocument: DefenseDocument = {
  content: 'content0',
  contentType: 'contentType2',
  defenseDocumentTypeCode: 'defenseDocumentTypeCode6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

