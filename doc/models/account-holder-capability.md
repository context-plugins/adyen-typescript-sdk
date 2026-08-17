
# Account Holder Capability

## Structure

`AccountHolderCapability`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `allowed` | `boolean \| undefined` | Optional, Read-only | Indicates whether the capability is allowed. Adyen sets this to **true** if the verification is successful and the account holder is permitted to use the capability. |
| `allowedLevel` | [`AllowedLevelEnum \| undefined`](../../doc/models/allowed-level-enum.md) | Optional, Read-only | The capability level that is allowed for the account holder.<br><br>Possible values: **notApplicable**, **low**, **medium**, **high**. |
| `allowedSettings` | [`CapabilitySettings3 \| undefined`](../../doc/models/capability-settings-3.md) | Optional | A JSON object containing the settings that are allowed for the account holder. |
| `enabled` | `boolean \| undefined` | Optional | Indicates whether the capability is enabled. If **false**, the capability is temporarily disabled for the account holder. |
| `problems` | [`CapabilityProblem[] \| undefined`](../../doc/models/capability-problem.md) | Optional, Read-only | Contains verification errors and the actions that you can take to resolve them. |
| `requested` | `boolean \| undefined` | Optional | Indicates whether the capability is requested. To check whether the account holder is permitted to use the capability, refer to the `allowed` field. |
| `requestedLevel` | [`RequestedLevelEnum \| undefined`](../../doc/models/requested-level-enum.md) | Optional | The requested level of the capability. Some capabilities, such as those used in [card issuing](https://docs.adyen.com/issuing/add-capabilities#capability-levels), have different levels. Levels increase the capability, but also require additional checks and increased monitoring.<br><br>Possible values: **notApplicable**, **low**, **medium**, **high**. |
| `requestedSettings` | [`CapabilitySettings1 \| undefined`](../../doc/models/capability-settings-1.md) | Optional | A JSON object containing the settings that were requested for the account holder. |
| `transferInstruments` | [`AccountSupportingEntityCapability[] \| undefined`](../../doc/models/account-supporting-entity-capability.md) | Optional, Read-only | Contains the status of the transfer instruments associated with this capability. |
| `verificationStatus` | [`VerificationStatusEnum \| undefined`](../../doc/models/verification-status-enum.md) | Optional, Read-only | The status of the verification checks for the capability.<br><br>Possible values:<br><br>* **pending**: Adyen is running the verification.<br><br>* **invalid**: The verification failed. Check if the `errors` array contains more information.<br><br>* **valid**: The verification has been successfully completed.<br><br>* **rejected**: Adyen has verified the information, but found reasons to not allow the capability. |

## Example

```ts
import {
  AccountHolderCapability,
  FundingSourceEnum,
  IntervalEnum,
} from 'adyen';

const accountHolderCapability: AccountHolderCapability = {
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
  enabled: false,
};
```

