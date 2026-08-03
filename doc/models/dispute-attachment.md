
# Dispute Attachment

*This model accepts additional fields of type unknown.*

## Structure

`DisputeAttachment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `attachmentType` | [`AttachmentType1`](../../doc/models/attachment-type-1.md) | Required | - |
| `content` | `string` | Required | The content of the image. An attachment must be base64-encoded data. Make sure that all base64-encoded data strings are generated without line breaks or "wrapping". For example, do not use `Base64.NO_WRAP` in Java, or its equivalent in other languages. Newline characters at the end of the base64-encoded data string will also result in a malformed input error.<br><br>**Constraints**: *Minimum Length*: `1` |
| `fileName` | `string` | Required | The name of the attachment, including its filename extension. Supported filename extensions: **jpeg**, **pdf**, **tiff**.<br><br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `17`, *Pattern*: `([^\s]+(\.(?i)(jpeg\|tiff\|pdf))$)` |
| `id` | `string \| undefined` | Optional, Read-only | The unique identifier of the attachment. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AttachmentType1, DisputeAttachment } from 'adyenlib';

const disputeAttachment: DisputeAttachment = {
  attachmentType: AttachmentType1.Correspondence,
  content: 'content0',
  fileName: 'fileName0',
  id: 'id6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

