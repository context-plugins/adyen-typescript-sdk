
# Legal Entity Capability

*This model accepts additional fields of type unknown.*

## Structure

`LegalEntityCapability`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `allowed` | `boolean \| undefined` | Optional, Read-only | Indicates whether the capability is allowed. Adyen sets this to **true** if the verification is successful. |
| `allowedLevel` | [`AllowedLevel \| undefined`](../../doc/models/allowed-level.md) | Optional, Read-only | - |
| `allowedSettings` | [`CapabilitySettings2 \| undefined`](../../doc/models/capability-settings-2.md) | Optional | - |
| `requested` | `boolean \| undefined` | Optional, Read-only | Indicates whether the capability is requested. To check whether the legal entity is permitted to use the capability, refer to the `allowed` field. |
| `requestedLevel` | [`AllowedLevel \| undefined`](../../doc/models/allowed-level.md) | Optional, Read-only | - |
| `requestedSettings` | [`CapabilitySettings2 \| undefined`](../../doc/models/capability-settings-2.md) | Optional | - |
| `transferInstruments` | [`SupportingEntityCapability[] \| undefined`](../../doc/models/supporting-entity-capability.md) | Optional, Read-only | The capability status of transfer instruments associated with the legal entity. |
| `verificationStatus` | `string \| undefined` | Optional, Read-only | The status of the verification checks for the capability.<br><br>Possible values:<br><br>* **pending**: Adyen is running the verification.<br><br>* **invalid**: The verification failed. Check if the `errors` array contains more information.<br><br>* **valid**: The verification has been successfully completed.<br><br>* **rejected**: Adyen has verified the information, but found reasons to not allow the capability. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  AllowedLevel,
  FundingSource,
  Interval,
  LegalEntityCapability,
} from 'adyen';

const legalEntityCapability: LegalEntityCapability = {
  allowed: false,
  allowedLevel: AllowedLevel.High,
  allowedSettings: {
    amountPerIndustry: {
      'key0': {
        currency: 'currency8',
        value: BigInt(56),
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      'key1': {
        currency: 'currency8',
        value: BigInt(56),
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      }
    },
    authorizedCardUsers: false,
    fundingSource: [
      FundingSource.Credit,
      FundingSource.Debit,
      FundingSource.Prepaid
    ],
    interval: Interval.Daily,
    maxAmount: {
      currency: 'currency4',
      value: BigInt(160),
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  requested: false,
  requestedLevel: AllowedLevel.High,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

