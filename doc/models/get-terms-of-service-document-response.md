
# Get Terms of Service Document Response

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
| `type` | [`Type64Enum \| undefined`](../../doc/models/type-64-enum.md) | Optional | The type of Terms of Service.<br><br>Possible values:<br><br>* **adyenForPlatformsManage**<br>* **adyenIssuing**<br>* **adyenForPlatformsAdvanced**<br>* **adyenCapital**<br>* **adyenAccount**<br>* **adyenCard**<br>* **adyenFranchisee**<br>* **adyenPccr**<br>* **adyenChargeCard**<br>* **kycOnInvite** |

## Example

```ts
import { GetTermsOfServiceDocumentResponse } from 'adyen';

const getTermsOfServiceDocumentResponse: GetTermsOfServiceDocumentResponse = {
  document: 'document2',
  id: 'id8',
  language: 'language0',
  termsOfServiceDocumentFormat: 'termsOfServiceDocumentFormat2',
  termsOfServiceDocumentId: 'termsOfServiceDocumentId6',
};
```

