
# Get Terms of Service Document Request

*This model accepts additional fields of type unknown.*

## Structure

`GetTermsOfServiceDocumentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `language` | `string` | Required | The language to be used for the Terms of Service document, specified by the two-letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code. Possible values: **en** for English or **fr** for French. |
| `termsOfServiceDocumentFormat` | `string \| undefined` | Optional | The requested format for the Terms of Service document. Default value: JSON. Possible values: **JSON**, **PDF**, or **TXT**. |
| `type` | [`Type25`](../../doc/models/type-25.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GetTermsOfServiceDocumentRequest, Type25 } from 'adyen';

const getTermsOfServiceDocumentRequest: GetTermsOfServiceDocumentRequest = {
  language: 'language0',
  type: Type25.AdyenCard,
  termsOfServiceDocumentFormat: 'termsOfServiceDocumentFormat2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

