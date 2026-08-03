
# Attach Document Response

*This model accepts additional fields of type unknown.*

## Structure

`AttachDocumentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `attachmentId` | `string \| undefined` | Optional, Read-only | The unique identifier of the attachment. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AttachDocumentResponse } from 'adyenlib';

const attachDocumentResponse: AttachDocumentResponse = {
  attachmentId: 'attachmentId2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

