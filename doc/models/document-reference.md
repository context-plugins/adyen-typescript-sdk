
# Document Reference

*This model accepts additional fields of type unknown.*

## Structure

`DocumentReference`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `active` | `boolean \| undefined` | Optional | Identifies whether the document is active and used for checks. |
| `description` | `string \| undefined` | Optional | Your description for the document. |
| `fileName` | `string \| undefined` | Optional | Document name. |
| `id` | `string \| undefined` | Optional | The unique identifier of the resource. |
| `modificationDate` | `string \| undefined` | Optional | The modification date of the document. |
| `pages` | [`DocumentPage[] \| undefined`](../../doc/models/document-page.md) | Optional | List of document pages |
| `type` | `string \| undefined` | Optional | Type of document, used when providing an ID number or uploading a document. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DocumentReference } from 'adyenlib';

const documentReference: DocumentReference = {
  active: false,
  description: 'description8',
  fileName: 'fileName2',
  id: 'id8',
  modificationDate: '2016-03-13T12:52:32.123Z',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

