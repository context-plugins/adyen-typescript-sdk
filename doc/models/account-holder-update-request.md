
# Account Holder Update Request

## Structure

`AccountHolderUpdateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balancePlatform` | `string \| undefined` | Optional | The unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id) to which the account holder belongs. Required in the request if your API credentials can be used for multiple balance platforms. |
| `capabilities` | [`Record<string, AccountHolderCapability> \| undefined`](../../doc/models/account-holder-capability.md) | Optional | Contains key-value pairs that specify the actions that an account holder can do in your platform. The key is a capability required for your integration. For example, **issueCard** for Issuing. The value is an object containing the settings for the capability. |
| `contactDetails` | [`ContactDetails1 \| undefined`](../../doc/models/contact-details-1.md) | Optional | Contact details of the account holder. |
| `description` | `string \| undefined` | Optional | Your description for the account holder.<br><br>**Constraints**: *Maximum Length*: `300` |
| `metadata` | `Record<string, string> \| undefined` | Optional | A set of key and value pairs for general use.<br>The keys do not have specific names and may be used for storing miscellaneous data as desired.<br><br>> Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs. |
| `migratedAccountHolderCode` | `string \| undefined` | Optional, Read-only | The unique identifier of the migrated account holder in the classic integration. |
| `primaryBalanceAccount` | `string \| undefined` | Optional | The ID of the account holder's primary balance account. By default, this is set to the first balance account that you create for the account holder. To assign a different balance account, send a PATCH request. |
| `reference` | `string \| undefined` | Optional | Your reference for the account holder.<br><br>**Constraints**: *Maximum Length*: `150` |
| `status` | [`Status9Enum \| undefined`](../../doc/models/status-9-enum.md) | Optional | The status of the account holder.<br><br>Possible values:<br><br>* **active**: The account holder is active and allowed to use its capabilities. This is the initial status for account holders and balance accounts. You can change this status to **suspended** or **closed**.<br><br>* **suspended**: The account holder is temporarily disabled and payouts are blocked. You can change this status to **active** or **closed**.<br><br>* **closed**: The account holder and all of its capabilities are permanently disabled. This is a final status and cannot be changed. |
| `timeZone` | `string \| undefined` | Optional | The time zone of the account holder. For example, **Europe/Amsterdam**.<br>Defaults to the time zone of the balance platform if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). |
| `verificationDeadlines` | [`VerificationDeadline[] \| undefined`](../../doc/models/verification-deadline.md) | Optional, Read-only | List of verification deadlines and the capabilities that will be disallowed if verification errors are not resolved. |

## Example

```ts
import {
  AccountHolderUpdateRequest,
  FundingSourceEnum,
  IntervalEnum,
  Type410Enum,
} from 'adyen';

const accountHolderUpdateRequest: AccountHolderUpdateRequest = {
  balancePlatform: 'balancePlatform6',
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
  description: 'description4',
  metadata: {
    'key0': 'metadata1',
    'key1': 'metadata0'
  },
};
```

