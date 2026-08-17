
# Get Accepted Terms of Service Document Response

## Structure

`GetAcceptedTermsOfServiceDocumentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `document` | `string \| undefined` | Optional | The accepted Terms of Service document in the requested format represented as a Base64-encoded bytes array. |
| `id` | `string \| undefined` | Optional | The unique identifier of the legal entity. |
| `termsOfServiceAcceptanceReference` | `string \| undefined` | Optional | An Adyen-generated reference for the accepted Terms of Service. |
| `termsOfServiceDocumentFormat` | [`TermsOfServiceDocumentFormatEnum \| undefined`](../../doc/models/terms-of-service-document-format-enum.md) | Optional | The format of the Terms of Service document. |

## Example

```ts
import {
  GetAcceptedTermsOfServiceDocumentResponse,
  TermsOfServiceDocumentFormatEnum,
} from 'adyen';

const getAcceptedTermsOfServiceDocumentResponse: GetAcceptedTermsOfServiceDocumentResponse = {
  document: 'document2',
  id: 'id4',
  termsOfServiceAcceptanceReference: 'termsOfServiceAcceptanceReference4',
  termsOfServiceDocumentFormat: TermsOfServiceDocumentFormatEnum.TXT,
};
```

