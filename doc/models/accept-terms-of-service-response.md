
# Accept Terms of Service Response

*This model accepts additional fields of type unknown.*

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
| `type` | [`Type25 \| undefined`](../../doc/models/type-25.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AcceptTermsOfServiceResponse } from 'adyenlib';

const acceptTermsOfServiceResponse: AcceptTermsOfServiceResponse = {
  acceptedBy: 'acceptedBy6',
  id: 'id8',
  ipAddress: 'ipAddress8',
  language: 'language0',
  termsOfServiceDocumentId: 'termsOfServiceDocumentId6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

