
# Update Account Holder Request

## Structure

`UpdateAccountHolderRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderCode` | `string` | Required | The code of the Account Holder to be updated. |
| `accountHolderDetails` | [`AccountHolderDetails4 \| undefined`](../../doc/models/account-holder-details-4.md) | Optional | The details to which the Account Holder should be updated.<br><br>Required if a processingTier is not provided. |
| `description` | `string \| undefined` | Optional | A description of the account holder, maximum 256 characters. You can use alphanumeric characters (A-Z, a-z, 0-9), white spaces, and underscores `_`. |
| `legalEntity` | [`LegalEntityEnum \| undefined`](../../doc/models/legal-entity-enum.md) | Optional | The legal entity type of the account holder. This determines the information that should be provided in the request.<br><br>Possible values: **Business**, **Individual**, or **NonProfit**.<br><br>* If set to **Business** or **NonProfit**, then `accountHolderDetails.businessDetails` must be provided, with at least one entry in the `accountHolderDetails.businessDetails.shareholders` list.<br><br>* If set to **Individual**, then `accountHolderDetails.individualDetails` must be provided. |
| `primaryCurrency` | `string \| undefined` | Optional | The primary three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes), to which the account holder should be updated. |
| `processingTier` | `number \| undefined` | Optional | The processing tier to which the Account Holder should be updated.<br><br>> The processing tier can not be lowered through this request.<br><br>> Required if accountHolderDetails are not provided. |
| `verificationProfile` | `string \| undefined` | Optional | The identifier of the profile that applies to this entity. |

## Example

```ts
import {
  GenderEnum,
  LegalEntityEnum,
  UpdateAccountHolderRequest,
} from 'adyen';

const updateAccountHolderRequest: UpdateAccountHolderRequest = {
  accountHolderCode: 'accountHolderCode0',
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
  description: 'description4',
  legalEntity: LegalEntityEnum.NonProfit,
  primaryCurrency: 'primaryCurrency6',
  processingTier: 72,
};
```

