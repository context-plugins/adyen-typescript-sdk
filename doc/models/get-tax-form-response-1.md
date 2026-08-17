
# Get Tax Form Response 1

## Structure

`GetTaxFormResponse1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `content` | `string` | Required | The content of the tax form in Base64 format. |
| `contentType` | [`ContentTypeEnum \| undefined`](../../doc/models/content-type-enum.md) | Optional | The content type of the tax form.<br><br>Possible values:<br><br>* **application/pdf** |

## Example

```ts
import { ContentTypeEnum, GetTaxFormResponse1 } from 'adyen';

const getTaxFormResponse1: GetTaxFormResponse1 = {
  content: 'content8',
  contentType: ContentTypeEnum.EnumApplicationpdf,
};
```

