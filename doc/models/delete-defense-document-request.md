
# Delete Defense Document Request

## Structure

`DeleteDefenseDocumentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `defenseDocumentType` | `string` | Required | The document type code of the defense document. |
| `disputePspReference` | `string` | Required | The PSP reference assigned to the dispute. |
| `merchantAccountCode` | `string` | Required | The merchant account identifier, for which you want to process the dispute transaction. |

## Example

```ts
import { DeleteDefenseDocumentRequest } from 'adyen';

const deleteDefenseDocumentRequest: DeleteDefenseDocumentRequest = {
  defenseDocumentType: 'defenseDocumentType4',
  disputePspReference: 'disputePspReference6',
  merchantAccountCode: 'merchantAccountCode8',
};
```

