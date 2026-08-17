
# Create Account Holder Request

## Structure

`CreateAccountHolderRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderCode` | `string` | Required | Your unique identifier for the prospective account holder.<br>The length must be between three (3) and fifty (50) characters long. Only letters, digits, and hyphens (-) are allowed. |
| `accountHolderDetails` | [`AccountHolderDetails1`](../../doc/models/account-holder-details-1.md) | Required | The details of the prospective account holder. |
| `createDefaultAccount` | `boolean \| undefined` | Optional | If set to **true**, an account with the default options is automatically created for the account holder.<br>By default, this field is set to **true**. |
| `description` | `string \| undefined` | Optional | A description of the prospective account holder, maximum 256 characters. You can use alphanumeric characters (A-Z, a-z, 0-9), white spaces, and underscores `_`. |
| `legalEntity` | [`LegalEntityEnum`](../../doc/models/legal-entity-enum.md) | Required | The legal entity type of the account holder. This determines the information that should be provided in the request.<br><br>Possible values: **Business**, **Individual**, or **NonProfit**.<br><br>* If set to **Business** or **NonProfit**, then `accountHolderDetails.businessDetails` must be provided, with at least one entry in the `accountHolderDetails.businessDetails.shareholders` list.<br><br>* If set to **Individual**, then `accountHolderDetails.individualDetails` must be provided. |
| `primaryCurrency` | `string \| undefined` | Optional | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes), with which the prospective account holder primarily deals. |
| `processingTier` | `number \| undefined` | Optional | The starting [processing tier](https://docs.adyen.com/classic-platforms/onboarding-and-verification/precheck-kyc-information) for the prospective account holder. |
| `verificationProfile` | `string \| undefined` | Optional | The identifier of the profile that applies to this entity. |

## Example

```ts
import {
  CreateAccountHolderRequest,
  GenderEnum,
  LegalEntityEnum,
} from 'adyen';

const createAccountHolderRequest: CreateAccountHolderRequest = {
  accountHolderCode: 'accountHolderCode8',
  accountHolderDetails: {
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
      },
      {
        accountNumber: 'accountNumber8',
        accountType: 'accountType4',
        bankAccountName: 'bankAccountName4',
        bankAccountReference: 'bankAccountReference4',
        bankAccountUUID: 'bankAccountUUID0',
      },
      {
        accountNumber: 'accountNumber8',
        accountType: 'accountType4',
        bankAccountName: 'bankAccountName4',
        bankAccountReference: 'bankAccountReference4',
        bankAccountUUID: 'bankAccountUUID0',
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
    email: 'email2',
    fullPhoneNumber: 'fullPhoneNumber8',
  },
  legalEntity: LegalEntityEnum.Business,
  createDefaultAccount: false,
  description: 'description2',
  primaryCurrency: 'primaryCurrency4',
  processingTier: 44,
  verificationProfile: 'verificationProfile6',
};
```

