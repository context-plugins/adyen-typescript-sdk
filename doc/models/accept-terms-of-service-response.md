
# Accept Terms of Service Response

## Structure

`AcceptTermsOfServiceResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acceptedBy` | `string \| undefined` | Optional | The unique identifier of the user that accepted the Terms of Service. |
| `id` | `string \| undefined` | Optional | The unique identifier of the Terms of Service acceptance. |
| `ipAddress` | `string \| undefined` | Optional | The IP address of the user that accepted the Terms of Service. |
| `language` | `string \| undefined` | Optional | The language used for the Terms of Service document, specified by the two-letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code. Possible value: **en** for English or **fr** for French.<br><br>Note that French is only available for some integration types in certain countries/regions. Reach out to your Adyen contact for more information. |
| `termsOfServiceDocumentId` | `string \| undefined` | Optional | The unique identifier of the Terms of Service document. |
| `type` | [`Type64Enum \| undefined`](../../doc/models/type-64-enum.md) | Optional | The type of Terms of Service.<br><br>Possible values:<br><br>* **adyenForPlatformsManage**<br>* **adyenIssuing**<br>* **adyenForPlatformsAdvanced**<br>* **adyenCapital**<br>* **adyenAccount**<br>* **adyenCard**<br>* **adyenFranchisee**<br>* **adyenPccr**<br>* **adyenChargeCard**<br>* **kycOnInvite** |

## Example

```ts
import { AcceptTermsOfServiceResponse } from 'adyen';

const acceptTermsOfServiceResponse: AcceptTermsOfServiceResponse = {
  acceptedBy: 'acceptedBy6',
  id: 'id8',
  ipAddress: 'ipAddress8',
  language: 'language0',
  termsOfServiceDocumentId: 'termsOfServiceDocumentId6',
};
```

