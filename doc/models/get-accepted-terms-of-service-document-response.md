
# Get Accepted Terms of Service Document Response

*This model accepts additional fields of type unknown.*

## Structure

`GetAcceptedTermsOfServiceDocumentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `document` | `string \| undefined` | Optional | The accepted Terms of Service document in the requested format represented as a Base64-encoded bytes array. |
| `id` | `string \| undefined` | Optional | The unique identifier of the legal entity. |
| `termsOfServiceAcceptanceReference` | `string \| undefined` | Optional | An Adyen-generated reference for the accepted Terms of Service. |
| `termsOfServiceDocumentFormat` | [`TermsOfServiceDocumentFormat \| undefined`](../../doc/models/terms-of-service-document-format.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  GetAcceptedTermsOfServiceDocumentResponse,
  TermsOfServiceDocumentFormat,
} from 'adyen';

const getAcceptedTermsOfServiceDocumentResponse: GetAcceptedTermsOfServiceDocumentResponse = {
  document: 'document2',
  id: 'id4',
  termsOfServiceAcceptanceReference: 'termsOfServiceAcceptanceReference4',
  termsOfServiceDocumentFormat: TermsOfServiceDocumentFormat.Txt,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

