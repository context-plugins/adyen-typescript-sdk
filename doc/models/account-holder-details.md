
# Account Holder Details

*This model accepts additional fields of type unknown.*

## Structure

`AccountHolderDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address` | [`ViasAddress`](../../doc/models/vias-address.md) | Required | - |
| `bankAccountDetails` | [`BankAccountDetail[] \| undefined`](../../doc/models/bank-account-detail.md) | Optional | Array of bank accounts associated with the account holder. For details about the required `bankAccountDetail` fields, see [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information). |
| `bankAggregatorDataReference` | `string \| undefined` | Optional | The opaque reference value returned by the Adyen API during bank account login. |
| `businessDetails` | [`BusinessDetails \| undefined`](../../doc/models/business-details.md) | Optional | - |
| `email` | `string \| undefined` | Optional | The email address of the account holder. |
| `fullPhoneNumber` | `string \| undefined` | Optional | The phone number of the account holder provided as a single string. It will be handled as a landline phone.<br>**Examples:** "0031 6 11 22 33 44", "+316/1122-3344", "(0031) 611223344" |
| `individualDetails` | [`IndividualDetails \| undefined`](../../doc/models/individual-details.md) | Optional | - |
| `lastReviewDate` | `string \| undefined` | Optional | Date when you last reviewed the account holder's information, in ISO-8601 YYYY-MM-DD format. For example, **2020-01-31**. |
| `legalArrangements` | [`LegalArrangementDetail[] \| undefined`](../../doc/models/legal-arrangement-detail.md) | Optional | An array containing information about the account holder's [legal arrangements](https://docs.adyen.com/classic-platforms/verification-process/legal-arrangements). |
| `merchantCategoryCode` | `string \| undefined` | Optional | The Merchant Category Code of the account holder.<br><br>> If not specified in the request, this will be derived from the platform account (which is configured by Adyen). |
| `metadata` | `Record<string, string> \| undefined` | Optional | A set of key and value pairs for general use by the account holder or merchant.<br>The keys do not have specific names and may be used for storing miscellaneous data as desired.<br><br>> The values being stored have a maximum length of eighty (80) characters and will be truncated if necessary.<br>> Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs. |
| `payoutMethods` | [`PayoutMethod[] \| undefined`](../../doc/models/payout-method.md) | Optional | Array of tokenized card details associated with the account holder. For details about how you can use the tokens to pay out, refer to [Pay out to cards](https://docs.adyen.com/classic-platforms/payout-to-cards). |
| `phoneNumber` | [`PhoneNumber3 \| undefined`](../../doc/models/phone-number-3.md) | Optional | - |
| `principalBusinessAddress` | [`ViasAddress \| undefined`](../../doc/models/vias-address.md) | Optional | - |
| `storeDetails` | [`StoreDetail[] \| undefined`](../../doc/models/store-detail.md) | Optional | Array of stores associated with the account holder. Required when onboarding account holders that have an Adyen [point of sale](https://docs.adyen.com/classic-platforms/platforms-for-pos). |
| `webAddress` | `string \| undefined` | Optional | The URL of the website of the account holder. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AccountHolderDetails, Gender } from 'adyen';

const accountHolderDetails: AccountHolderDetails = {
  address: {
    country: 'country0',
    city: 'city6',
    houseNumberOrName: 'houseNumberOrName4',
    postalCode: 'postalCode8',
    stateOrProvince: 'stateOrProvince4',
    street: 'street6',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  bankAccountDetails: [
    {
      accountNumber: 'accountNumber8',
      accountType: 'accountType4',
      bankAccountName: 'bankAccountName4',
      bankAccountReference: 'bankAccountReference4',
      bankAccountUuid: 'bankAccountUUID0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      accountNumber: 'accountNumber8',
      accountType: 'accountType4',
      bankAccountName: 'bankAccountName4',
      bankAccountReference: 'bankAccountReference4',
      bankAccountUuid: 'bankAccountUUID0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      accountNumber: 'accountNumber8',
      accountType: 'accountType4',
      bankAccountName: 'bankAccountName4',
      bankAccountReference: 'bankAccountReference4',
      bankAccountUuid: 'bankAccountUUID0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  bankAggregatorDataReference: 'bankAggregatorDataReference6',
  businessDetails: {
    doingBusinessAs: 'doingBusinessAs6',
    legalBusinessName: 'legalBusinessName8',
    listedUltimateParentCompany: [
      {
        address: {
          country: 'country0',
          city: 'city6',
          houseNumberOrName: 'houseNumberOrName4',
          postalCode: 'postalCode8',
          stateOrProvince: 'stateOrProvince4',
          street: 'street6',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        businessDetails: {
          legalBusinessName: 'legalBusinessName8',
          registrationNumber: 'registrationNumber6',
          stockExchange: 'stockExchange4',
          stockNumber: 'stockNumber6',
          stockTicker: 'stockTicker6',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        ultimateParentCompanyCode: 'ultimateParentCompanyCode2',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      {
        address: {
          country: 'country0',
          city: 'city6',
          houseNumberOrName: 'houseNumberOrName4',
          postalCode: 'postalCode8',
          stateOrProvince: 'stateOrProvince4',
          street: 'street6',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        businessDetails: {
          legalBusinessName: 'legalBusinessName8',
          registrationNumber: 'registrationNumber6',
          stockExchange: 'stockExchange4',
          stockNumber: 'stockNumber6',
          stockTicker: 'stockTicker6',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        ultimateParentCompanyCode: 'ultimateParentCompanyCode2',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      }
    ],
    registrationNumber: 'registrationNumber6',
    shareholders: [
      {
        address: {
          country: 'country0',
          city: 'city6',
          houseNumberOrName: 'houseNumberOrName4',
          postalCode: 'postalCode8',
          stateOrProvince: 'stateOrProvince4',
          street: 'street6',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        email: 'email8',
        fullPhoneNumber: 'fullPhoneNumber2',
        jobTitle: 'jobTitle2',
        name: {
          firstName: 'firstName4',
          gender: Gender.Male,
          infix: 'infix4',
          lastName: 'lastName4',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      {
        address: {
          country: 'country0',
          city: 'city6',
          houseNumberOrName: 'houseNumberOrName4',
          postalCode: 'postalCode8',
          stateOrProvince: 'stateOrProvince4',
          street: 'street6',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        email: 'email8',
        fullPhoneNumber: 'fullPhoneNumber2',
        jobTitle: 'jobTitle2',
        name: {
          firstName: 'firstName4',
          gender: Gender.Male,
          infix: 'infix4',
          lastName: 'lastName4',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      }
    ],
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  email: 'email2',
  fullPhoneNumber: 'fullPhoneNumber8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

