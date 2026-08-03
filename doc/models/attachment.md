
# Attachment

*This model accepts additional fields of type unknown.*

## Structure

`Attachment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `content` | `string` | Required | The document in Base64-encoded string format. |
| `contentType` | `string \| undefined` | Optional | The file format.<br><br>Possible values: **application/pdf**, **image/jpg**, **image/jpeg**, **image/png**. |
| `filename` | `string \| undefined` | Optional | The name of the file including the file extension. |
| `pageName` | `string \| undefined` | Optional | The name of the file including the file extension. |
| `pageType` | `string \| undefined` | Optional | Specifies which side of the ID card is uploaded.<br><br>* If the `type` is **driversLicense** or **identityCard**, you must set this to **front** or **back** and include both sides in the same API request.<br><br>* For any other types, when this is omitted, we infer the page number based on the order of attachments. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Attachment } from 'adyenlib';

const attachment: Attachment = {
  content: 'content2',
  contentType: 'contentType4',
  filename: 'filename0',
  pageName: 'pageName0',
  pageType: 'pageType6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

