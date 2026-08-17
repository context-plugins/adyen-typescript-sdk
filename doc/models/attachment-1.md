
# Attachment 1

Object that contains the document.

## Structure

`Attachment1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `content` | `string` | Required | The document in Base64-encoded string format. |
| `contentType` | `string \| undefined` | Optional | The file format.<br><br>Possible values: **application/pdf**, **image/jpg**, **image/jpeg**, **image/png**. |
| `filename` | `string \| undefined` | Optional | The name of the file including the file extension. |
| `pageName` | `string \| undefined` | Optional | The name of the file including the file extension. |
| `pageType` | `string \| undefined` | Optional | Specifies which side of the ID card is uploaded.<br><br>* If the `type` is **driversLicense** or **identityCard**, you must set this to **front** or **back** and include both sides in the same API request.<br><br>* For any other types, when this is omitted, we infer the page number based on the order of attachments. |

## Example

```ts
import { Attachment1 } from 'adyen';

const attachment1: Attachment1 = {
  content: 'content6',
  contentType: 'contentType8',
  filename: 'filename4',
  pageName: 'pageName4',
  pageType: 'pageType0',
};
```

