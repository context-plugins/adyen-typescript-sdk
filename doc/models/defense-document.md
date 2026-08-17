
# Defense Document

## Structure

`DefenseDocument`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `content` | `string` | Required | The content of the defense document. |
| `contentType` | `string` | Required | The content type of the defense document. |
| `defenseDocumentTypeCode` | `string` | Required | The document type code of the defense document. |

## Example

```ts
import { DefenseDocument } from 'adyen';

const defenseDocument: DefenseDocument = {
  content: 'content0',
  contentType: 'contentType2',
  defenseDocumentTypeCode: 'defenseDocumentTypeCode6',
};
```

