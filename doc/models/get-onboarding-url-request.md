
# Get Onboarding Url Request

## Structure

`GetOnboardingUrlRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderCode` | `string` | Required | The account holder code you provided when you created the account holder. |
| `collectInformation` | [`CollectInformation1 \| undefined`](../../doc/models/collect-information-1.md) | Optional | Contains indicators whether the page should only collect information for specific [KYC checks](https://docs.adyen.com/classic-platforms/verification-checks). By default, the page collects information for all KYC checks that apply to the [legal entity type](https://docs.adyen.com/classic-platforms/account-holders-and-accounts#legal-entity-types). |
| `editMode` | `boolean \| undefined` | Optional | Indicates if editing checks is allowed even if all the checks have passed. |
| `mobileOAuthCallbackUrl` | `string \| undefined` | Optional | The URL to which the account holder is redirected after completing an OAuth authentication with a bank through Trustly/PayMyBank. |
| `platformName` | `string \| undefined` | Optional | The platform name which will show up in the welcome page. |
| `returnUrl` | `string \| undefined` | Optional | The URL where the account holder will be redirected back to after they complete the onboarding, or if their session times out. Maximum length of 500 characters. If you don't provide this, the account holder will be redirected back to the default return URL configured in your platform account. |
| `shopperLocale` | `string \| undefined` | Optional | The language to be used in the page, specified by a combination of a language and country code. For example, **pt-BR**.<br><br>If not specified in the request or if the language is not supported, the page uses the browser language. If the browser language is not supported, the page uses **en-US** by default.<br><br>For a list of supported languages, refer to [Change the page language](https://docs.adyen.com/classic-platforms/hosted-onboarding-page/customize-experience#change-page-language). |
| `showPages` | [`ShowPages2 \| undefined`](../../doc/models/show-pages-2.md) | Optional | Contains indicators whether specific pages must be shown to the account holder. |

## Example

```ts
import { GetOnboardingUrlRequest } from 'adyen';

const getOnboardingUrlRequest: GetOnboardingUrlRequest = {
  accountHolderCode: 'accountHolderCode4',
  collectInformation: {
    bankDetails: false,
    businessDetails: false,
    individualDetails: false,
    legalArrangementDetails: false,
    pciQuestionnaire: false,
  },
  editMode: false,
  mobileOAuthCallbackUrl: 'mobileOAuthCallbackUrl2',
  platformName: 'platformName6',
  returnUrl: 'returnUrl2',
};
```

