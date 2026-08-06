
# Account Verification Routes Request

*This model accepts additional fields of type unknown.*

## Structure

`AccountVerificationRoutesRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `country` | [`AccountVerificationCountry2`](../../doc/models/account-verification-country-2.md) | Required | - |
| `locale` | `string \| undefined` | Optional | The language to use in the open banking flow UI, specified by a combination of a two-letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) language code and an [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code.<br><br>This information is used to configure the open banking flow with the same language for a consistent user experience.<br><br>Default value: **en-US** |
| `redirectUrl` | `string` | Required | The URL where Adyen redirects the third-party individual after they complete the open banking flow. |
| `state` | `string \| undefined` | Optional | A value that helps you identify the request in callback handling. You can generate this value on a per-session basis to protect the callback against Cross-Site Request Forgery (CSRF) attacks. This value  must be composed of characters that can be successfully URL-encoded. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  AccountVerificationCountry2,
  AccountVerificationRoutesRequest,
} from 'adyen';

const accountVerificationRoutesRequest: AccountVerificationRoutesRequest = {
  country: AccountVerificationCountry2.Se,
  redirectUrl: 'redirectUrl4',
  locale: 'locale0',
  state: 'state2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

