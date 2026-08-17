
# Account Holder Details 3

Details of the account holder.

## Structure

`AccountHolderDetails3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address` | [`ViasAddress9`](../../doc/models/vias-address-9.md) | Required | The address of the account holder. |
| `bankAccountDetails` | [`BankAccountDetail[] \| undefined`](../../doc/models/bank-account-detail.md) | Optional | Array of bank accounts associated with the account holder. For details about the required `bankAccountDetail` fields, see [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information). |
| `bankAggregatorDataReference` | `string \| undefined` | Optional | The opaque reference value returned by the Adyen API during bank account login. |
| `businessDetails` | [`BusinessDetails3 \| undefined`](../../doc/models/business-details-3.md) | Optional | Details about the business or nonprofit account holder.<br>Required when creating an account holder with `legalEntity` **Business** or **NonProfit**. |
| `email` | `string \| undefined` | Optional | The email address of the account holder. |
| `fullPhoneNumber` | `string \| undefined` | Optional | The phone number of the account holder provided as a single string. It will be handled as a landline phone.<br>**Examples:** "0031 6 11 22 33 44", "+316/1122-3344", "(0031) 611223344" |
| `individualDetails` | [`IndividualDetails3 \| undefined`](../../doc/models/individual-details-3.md) | Optional | Details about the individual account holder.<br>Required when creating an account holder with `legalEntity` **Individual**. |
| `lastReviewDate` | `string \| undefined` | Optional | Date when you last reviewed the account holder's information, in ISO-8601 YYYY-MM-DD format. For example, **2020-01-31**. |
| `legalArrangements` | [`LegalArrangementDetail[] \| undefined`](../../doc/models/legal-arrangement-detail.md) | Optional | An array containing information about the account holder's [legal arrangements](https://docs.adyen.com/classic-platforms/verification-process/legal-arrangements). |
| `merchantCategoryCode` | `string \| undefined` | Optional | The Merchant Category Code of the account holder.<br><br>> If not specified in the request, this will be derived from the platform account (which is configured by Adyen). |
| `metadata` | `Record<string, string> \| undefined` | Optional | A set of key and value pairs for general use by the account holder or merchant.<br>The keys do not have specific names and may be used for storing miscellaneous data as desired.<br><br>> The values being stored have a maximum length of eighty (80) characters and will be truncated if necessary.<br>> Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs. |
| `payoutMethods` | [`PayoutMethod[] \| undefined`](../../doc/models/payout-method.md) | Optional | Array of tokenized card details associated with the account holder. For details about how you can use the tokens to pay out, refer to [Pay out to cards](https://docs.adyen.com/classic-platforms/payout-to-cards). |
| `phoneNumber` | [`ViasPhoneNumber3 \| undefined`](../../doc/models/vias-phone-number-3.md) | Optional | The phone number of the account holder.<br><br>> Required if a `fullPhoneNumber` is not provided. |
| `principalBusinessAddress` | [`ViasAddress6 \| undefined`](../../doc/models/vias-address-6.md) | Optional | The principal business address of the account holder. |
| `storeDetails` | [`StoreDetail[] \| undefined`](../../doc/models/store-detail.md) | Optional | Array of stores associated with the account holder. Required when onboarding account holders that have an Adyen [point of sale](https://docs.adyen.com/classic-platforms/platforms-for-pos). |
| `webAddress` | `string \| undefined` | Optional | The URL of the website of the account holder. |

## Example

```ts
import { AccountHolderDetails3, GenderEnum } from 'adyen';

const accountHolderDetails3: AccountHolderDetails3 = {
  address: {
    country: 'country0',
    city: 'city6',
    houseNumberOrName: 'houseNumberOrName4',
    postalCode: 'postalCode8',
    stateOrProvince: 'stateOrProvince4',
    street: 'street6',
  },
  bankAccountDetails: [
    {
      accountNumber: 'accountNumber8',
      accountType: 'accountType4',
      bankAccountName: 'bankAccountName4',
      bankAccountReference: 'bankAccountReference4',
      bankAccountUUID: 'bankAccountUUID0',
    }
  ],
  bankAggregatorDataReference: 'bankAggregatorDataReference8',
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
        },
        businessDetails: {
          legalBusinessName: 'legalBusinessName8',
          registrationNumber: 'registrationNumber6',
          stockExchange: 'stockExchange4',
          stockNumber: 'stockNumber6',
          stockTicker: 'stockTicker6',
        },
        ultimateParentCompanyCode: 'ultimateParentCompanyCode2',
      },
      {
        address: {
          country: 'country0',
          city: 'city6',
          houseNumberOrName: 'houseNumberOrName4',
          postalCode: 'postalCode8',
          stateOrProvince: 'stateOrProvince4',
          street: 'street6',
        },
        businessDetails: {
          legalBusinessName: 'legalBusinessName8',
          registrationNumber: 'registrationNumber6',
          stockExchange: 'stockExchange4',
          stockNumber: 'stockNumber6',
          stockTicker: 'stockTicker6',
        },
        ultimateParentCompanyCode: 'ultimateParentCompanyCode2',
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
        },
        email: 'email8',
        fullPhoneNumber: 'fullPhoneNumber2',
        jobTitle: 'jobTitle2',
        name: {
          firstName: 'firstName4',
          gender: GenderEnum.MALE,
          infix: 'infix4',
          lastName: 'lastName4',
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
        },
        email: 'email8',
        fullPhoneNumber: 'fullPhoneNumber2',
        jobTitle: 'jobTitle2',
        name: {
          firstName: 'firstName4',
          gender: GenderEnum.MALE,
          infix: 'infix4',
          lastName: 'lastName4',
        },
      }
    ],
  },
  email: 'email0',
  fullPhoneNumber: 'fullPhoneNumber0',
};
```

