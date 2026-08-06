
# Get Tax Form Response 1

*This model accepts additional fields of type unknown.*

## Structure

`GetTaxFormResponse1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `content` | `string` | Required | The content of the tax form in Base64 format. |
| `contentType` | [`ContentType \| undefined`](../../doc/models/content-type.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ContentType, GetTaxFormResponse1 } from 'adyen';

const getTaxFormResponse1: GetTaxFormResponse1 = {
  content: 'content8',
  contentType: ContentType.EnumApplicationpdf,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

