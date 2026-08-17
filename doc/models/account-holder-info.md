
# Account Holder Info

## Structure

`AccountHolderInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balancePlatform` | `string \| undefined` | Optional | The unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id) to which the account holder belongs. Required in the request if your API credentials can be used for multiple balance platforms. |
| `capabilities` | [`Record<string, AccountHolderCapability> \| undefined`](../../doc/models/account-holder-capability.md) | Optional | Contains key-value pairs that specify the actions that an account holder can do in your platform. The key is a capability required for your integration. For example, **issueCard** for Issuing. The value is an object containing the settings for the capability. |
| `contactDetails` | [`ContactDetails1 \| undefined`](../../doc/models/contact-details-1.md) | Optional | Contact details of the account holder. |
| `description` | `string \| undefined` | Optional | Your description for the account holder.<br><br>**Constraints**: *Maximum Length*: `300` |
| `legalEntityId` | `string` | Required | The unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id) associated with the account holder. Adyen performs a verification process against the legal entity of the account holder. |
| `metadata` | `Record<string, string> \| undefined` | Optional | A set of key and value pairs for general use.<br>The keys do not have specific names and may be used for storing miscellaneous data as desired.<br><br>> Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs. |
| `migratedAccountHolderCode` | `string \| undefined` | Optional, Read-only | The unique identifier of the migrated account holder in the classic integration. |
| `reference` | `string \| undefined` | Optional | Your reference for the account holder.<br><br>**Constraints**: *Maximum Length*: `150` |
| `timeZone` | `string \| undefined` | Optional | The time zone of the account holder. For example, **Europe/Amsterdam**.<br>Defaults to the time zone of the balance platform if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). |

## Example

```ts
import {
  AccountHolderInfo,
  FundingSourceEnum,
  IntervalEnum,
  Type410Enum,
} from 'adyen';

const accountHolderInfo: AccountHolderInfo = {
  legalEntityId: 'legalEntityId4',
  balancePlatform: 'balancePlatform2',
  capabilities: {
    'key0': {
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
    },
    'key1': {
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
    },
    'key2': {
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
    }
  },
  contactDetails: {
    address: {
      city: 'city6',
      country: 'country0',
      houseNumberOrName: 'houseNumberOrName4',
      postalCode: 'postalCode8',
      street: 'street6',
      stateOrProvince: 'stateOrProvince4',
    },
    email: 'email6',
    phone: {
      number: 'number8',
      type: Type410Enum.Landline,
    },
    webAddress: 'webAddress0',
  },
  description: 'description0',
  metadata: {
    'key0': 'metadata3',
    'key1': 'metadata4'
  },
};
```

