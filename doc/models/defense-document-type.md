
# Defense Document Type

## Structure

`DefenseDocumentType`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `available` | `boolean` | Required | When **true**, you've successfully uploaded this type of defense document. When **false**, you haven't uploaded this defense document type. |
| `defenseDocumentTypeCode` | `string` | Required | The document type code of the defense document. |
| `requirementLevel` | `string` | Required | Indicates to what extent the defense document is required in the defense process.<br><br>Possible values:<br><br>* **Required**: You must supply the document.<br><br>* **OneOrMore**: You must supply at least one of the documents with this label.<br><br>* **Optional**: You can choose to supply the document.<br><br>* **AlternativeRequired**: You must supply a generic defense document. To enable this functionality, contact our Support Team. When enabled, you can supply a generic defense document for all schemes. |

## Example

```ts
import { DefenseDocumentType } from 'adyen';

const defenseDocumentType: DefenseDocumentType = {
  available: false,
  defenseDocumentTypeCode: 'defenseDocumentTypeCode8',
  requirementLevel: 'requirementLevel4',
};
```

