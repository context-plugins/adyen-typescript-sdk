
# Supply Defense Document Request

*This model accepts additional fields of type unknown.*

## Structure

`SupplyDefenseDocumentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `defenseDocuments` | [`DefenseDocument[]`](../../doc/models/defense-document.md) | Required | An array containing a list of the defense documents. |
| `disputePspReference` | `string` | Required | The PSP reference assigned to the dispute. |
| `merchantAccountCode` | `string` | Required | The merchant account identifier, for which you want to process the dispute transaction. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SupplyDefenseDocumentRequest } from 'adyenlib';

const supplyDefenseDocumentRequest: SupplyDefenseDocumentRequest = {
  defenseDocuments: [
    {
      content: 'content0',
      contentType: 'contentType2',
      defenseDocumentTypeCode: 'defenseDocumentTypeCode6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  disputePspReference: 'disputePspReference8',
  merchantAccountCode: 'merchantAccountCode0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

