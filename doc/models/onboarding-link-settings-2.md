
# Onboarding Link Settings 2

Key-value pairs indicating the settings for the hosted onboarding page. The key represents a specific setting.

## Structure

`OnboardingLinkSettings2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acceptedCountries` | `string[] \| undefined` | Optional | The list of countries the user can choose from in hosted onboarding when `editPrefilledCountry` is allowed.<br><br>The value must be in the two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code format.<br><br>The array is empty by default, allowing all [countries and regions supported by hosted onboarding](https://docs.adyen.com/platforms/onboard-users/#hosted-onboarding). |
| `allowBankAccountFormatSelection` | `boolean \| undefined` | Optional | Default value: **false**<br><br>Indicates if the user can select the format for their payout account (if applicable). |
| `allowDebugUi` | `boolean \| undefined` | Optional | Default value: **true**<br><br>Indicates whether the debug user interface (UI) is enabled. The debug UI provides information for your support staff to diagnose and resolve user issues during onboarding. It can be accessed using a keyboard shortcut. |
| `allowIntraRegionCrossBorderPayout` | `boolean \| undefined` | Optional | Default value: **false**<br><br>Indicates if the user can select a payout account in a different EU/EEA location (including Switzerland and the UK) than the location of their legal entity. |
| `changeLegalEntityType` | `boolean \| undefined` | Optional | Default value: **true**<br><br>Indicates if the user can change their legal entity type. |
| `editPrefilledCountry` | `boolean \| undefined` | Optional | Default value: **true**<br><br>Indicates if the user can change the country of their legal entity's address, for example the registered address of an organization. |
| `enforceLegalAge` | `boolean \| undefined` | Optional | Default value: **false**<br><br>Indicates if only users above the age of 18 can be onboarded. |
| `hideOnboardingIntroductionIndividual` | `boolean \| undefined` | Optional | Default value: **true**<br><br>Indicates whether the introduction screen is hidden for the user of the individual legal entity type.<br>The introduction screen provides brief instructions for the subsequent steps in the hosted onboarding process. |
| `hideOnboardingIntroductionOrganization` | `boolean \| undefined` | Optional | Default value: **true**<br><br>Indicates whether the introduction screen is hidden for the user of the organization legal entity type.<br>The introduction screen provides brief instructions for the subsequent steps in the hosted onboarding process. |
| `hideOnboardingIntroductionSoleProprietor` | `boolean \| undefined` | Optional | Default value: **true**<br><br>Indicates whether the introduction screen is hidden for the user of the sole proprietorship legal entity type.<br>The introduction screen provides brief instructions for the subsequent steps in the hosted onboarding process. |
| `hideOnboardingIntroductionTrust` | `boolean \| undefined` | Optional | Default value: **true**<br><br>Indicates whether the introduction screen is hidden for the user of the trust legal entity type.<br>The introduction screen provides brief instructions for the subsequent steps in the hosted onboarding process. |
| `instantBankVerification` | `boolean \| undefined` | Optional | Default value: **true**<br><br>Indicates if the user can initiate the verification process through open banking providers, like Plaid or Tink. |
| `requirePciSignEcomMoto` | `boolean \| undefined` | Optional | Default value: **false**<br><br>Indicates if the user is required to sign a PCI questionnaires for the **ecomMoto** sales channel type. |
| `requirePciSignEcommerce` | `boolean \| undefined` | Optional | Default value: **false**<br><br>Indicates if the user is required to sign a PCI questionnaires for the **eCommerce** sales channel type. |
| `requirePciSignPos` | `boolean \| undefined` | Optional | Default value: **false**<br><br>Indicates if the user is required to sign a PCI questionnaires for the **pos** sales channel type. |
| `requirePciSignPosMoto` | `boolean \| undefined` | Optional | Default value: **false**<br><br>Indicates if the user is required to sign a PCI questionnaires for the **posMoto** sales channel type. |
| `transferInstrumentLimit` | `number \| undefined` | Optional | The maximum number of transfer instruments the user can create. |

## Example

```ts
import { OnboardingLinkSettings2 } from 'adyen';

const onboardingLinkSettings2: OnboardingLinkSettings2 = {
  acceptedCountries: [
    'acceptedCountries3',
    'acceptedCountries4',
    'acceptedCountries5'
  ],
  allowBankAccountFormatSelection: false,
  allowDebugUi: false,
  allowIntraRegionCrossBorderPayout: false,
  changeLegalEntityType: false,
};
```

