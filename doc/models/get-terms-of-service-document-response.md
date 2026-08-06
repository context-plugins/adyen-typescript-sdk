
# Get Terms of Service Document Response

*This model accepts additional fields of type unknown.*

## Structure

`GetTermsOfServiceDocumentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `document` | `string \| undefined` | Optional | The Terms of Service document in Base64-encoded format. |
| `id` | `string \| undefined` | Optional | The unique identifier of the legal entity. |
| `language` | `string \| undefined` | Optional | The language used for the Terms of Service document, specified by the two-letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code. Possible value: **en** for English or **fr** for French.<br><br>Note that French is only available for some integration types in certain countries/regions. Reach out to your Adyen contact for more information. |
| `termsOfServiceDocumentFormat` | `string \| undefined` | Optional | The format of the Terms of Service document. |
| `termsOfServiceDocumentId` | `string \| undefined` | Optional | The unique identifier of the Terms of Service document. |
| `type` | [`Type25 \| undefined`](../../doc/models/type-25.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GetTermsOfServiceDocumentResponse } from 'adyen';

const getTermsOfServiceDocumentResponse: GetTermsOfServiceDocumentResponse = {
  document: 'document2',
  id: 'id8',
  language: 'language0',
  termsOfServiceDocumentFormat: 'termsOfServiceDocumentFormat2',
  termsOfServiceDocumentId: 'termsOfServiceDocumentId6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

