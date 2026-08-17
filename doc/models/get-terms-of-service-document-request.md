
# Get Terms of Service Document Request

## Structure

`GetTermsOfServiceDocumentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `language` | `string` | Required | The language to be used for the Terms of Service document, specified by the two-letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code. Possible values: **en** for English or **fr** for French. |
| `termsOfServiceDocumentFormat` | `string \| undefined` | Optional | The requested format for the Terms of Service document. Default value: JSON. Possible values: **JSON**, **PDF**, or **TXT**. |
| `type` | [`Type64Enum`](../../doc/models/type-64-enum.md) | Required | The type of Terms of Service.<br><br>Possible values:<br><br>* **adyenForPlatformsManage**<br>* **adyenIssuing**<br>* **adyenForPlatformsAdvanced**<br>* **adyenCapital**<br>* **adyenAccount**<br>* **adyenCard**<br>* **adyenFranchisee**<br>* **adyenPccr**<br>* **adyenChargeCard**<br>* **kycOnInvite** |

## Example

```ts
import { GetTermsOfServiceDocumentRequest, Type64Enum } from 'adyen';

const getTermsOfServiceDocumentRequest: GetTermsOfServiceDocumentRequest = {
  language: 'language0',
  type: Type64Enum.AdyenCard,
  termsOfServiceDocumentFormat: 'termsOfServiceDocumentFormat2',
};
```

