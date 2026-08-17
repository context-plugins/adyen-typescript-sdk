
# Supply Defense Document Request

## Structure

`SupplyDefenseDocumentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `defenseDocuments` | [`DefenseDocument[]`](../../doc/models/defense-document.md) | Required | An array containing a list of the defense documents. |
| `disputePspReference` | `string` | Required | The PSP reference assigned to the dispute. |
| `merchantAccountCode` | `string` | Required | The merchant account identifier, for which you want to process the dispute transaction. |

## Example

```ts
import { SupplyDefenseDocumentRequest } from 'adyen';

const supplyDefenseDocumentRequest: SupplyDefenseDocumentRequest = {
  defenseDocuments: [
    {
      content: 'content0',
      contentType: 'contentType2',
      defenseDocumentTypeCode: 'defenseDocumentTypeCode6',
    }
  ],
  disputePspReference: 'disputePspReference8',
  merchantAccountCode: 'merchantAccountCode0',
};
```

