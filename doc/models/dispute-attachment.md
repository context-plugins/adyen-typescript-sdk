
# Dispute Attachment

## Structure

`DisputeAttachment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `attachmentType` | [`AttachmentType1Enum`](../../doc/models/attachment-type-1-enum.md) | Required | The type of information contained in the attachment: **receipt**, **correspondence**, **other**. |
| `content` | `string` | Required | The content of the image. An attachment must be base64-encoded data. Make sure that all base64-encoded data strings are generated without line breaks or "wrapping". For example, do not use `Base64.NO_WRAP` in Java, or its equivalent in other languages. Newline characters at the end of the base64-encoded data string will also result in a malformed input error.<br><br>**Constraints**: *Minimum Length*: `1` |
| `fileName` | `string` | Required | The name of the attachment, including its filename extension. Supported filename extensions: **jpeg**, **pdf**, **tiff**.<br><br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `17`, *Pattern*: `([^\s]+(\.(?i)(jpeg\|tiff\|pdf))$)` |
| `id` | `string \| undefined` | Optional, Read-only | The unique identifier of the attachment. |

## Example

```ts
import { AttachmentType1Enum, DisputeAttachment } from 'adyen';

const disputeAttachment: DisputeAttachment = {
  attachmentType: AttachmentType1Enum.Correspondence,
  content: 'content0',
  fileName: 'fileName0',
};
```

