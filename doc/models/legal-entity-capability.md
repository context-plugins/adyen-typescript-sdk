
# Legal Entity Capability

## Structure

`LegalEntityCapability`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `allowed` | `boolean \| undefined` | Optional, Read-only | Indicates whether the capability is allowed. Adyen sets this to **true** if the verification is successful. |
| `allowedLevel` | [`AllowedLevelEnum \| undefined`](../../doc/models/allowed-level-enum.md) | Optional, Read-only | The capability level that is allowed for the legal entity.<br><br>Possible values: **notApplicable**, **low**, **medium**, **high**. |
| `allowedSettings` | [`CapabilitySettings11 \| undefined`](../../doc/models/capability-settings-11.md) | Optional | The settings that are allowed for the legal entity. |
| `requested` | `boolean \| undefined` | Optional, Read-only | Indicates whether the capability is requested. To check whether the legal entity is permitted to use the capability, refer to the `allowed` field. |
| `requestedLevel` | [`AllowedLevelEnum \| undefined`](../../doc/models/allowed-level-enum.md) | Optional, Read-only | The requested level of the capability. Some capabilities, such as those used in [card issuing](https://docs.adyen.com/issuing/add-capabilities#capability-levels), have different levels. Levels increase the capability, but also require additional checks and increased monitoring.<br><br>Possible values: **notApplicable**, **low**, **medium**, **high**. |
| `requestedSettings` | [`CapabilitySettings21 \| undefined`](../../doc/models/capability-settings-21.md) | Optional | The settings that are requested for the legal entity. |
| `transferInstruments` | [`SupportingEntityCapability[] \| undefined`](../../doc/models/supporting-entity-capability.md) | Optional, Read-only | The capability status of transfer instruments associated with the legal entity. |
| `verificationStatus` | `string \| undefined` | Optional, Read-only | The status of the verification checks for the capability.<br><br>Possible values:<br><br>* **pending**: Adyen is running the verification.<br><br>* **invalid**: The verification failed. Check if the `errors` array contains more information.<br><br>* **valid**: The verification has been successfully completed.<br><br>* **rejected**: Adyen has verified the information, but found reasons to not allow the capability. |

## Example

```ts
import {
  FundingSourceEnum,
  IntervalEnum,
  LegalEntityCapability,
} from 'adyen';

const legalEntityCapability: LegalEntityCapability = {
  allowedSettings: {
    amountPerIndustry: {
      'key0': {
        currency: 'currency8',
        value: BigInt(56),
      },
      'key1': {
        currency: 'currency8',
        value: BigInt(56),
      }
    },
    authorizedCardUsers: false,
    fundingSource: [
      FundingSourceEnum.Credit,
      FundingSourceEnum.Debit,
      FundingSourceEnum.Prepaid
    ],
    interval: IntervalEnum.Daily,
    maxAmount: {
      currency: 'currency4',
      value: BigInt(160),
    },
  },
};
```

