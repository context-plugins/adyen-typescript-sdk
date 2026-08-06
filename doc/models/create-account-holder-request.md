
# Create Account Holder Request

*This model accepts additional fields of type unknown.*

## Structure

`CreateAccountHolderRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderCode` | `string` | Required | Your unique identifier for the prospective account holder.<br>The length must be between three (3) and fifty (50) characters long. Only letters, digits, and hyphens (-) are allowed. |
| `accountHolderDetails` | [`AccountHolderDetails`](../../doc/models/account-holder-details.md) | Required | - |
| `createDefaultAccount` | `boolean \| undefined` | Optional | If set to **true**, an account with the default options is automatically created for the account holder.<br>By default, this field is set to **true**. |
| `description` | `string \| undefined` | Optional | A description of the prospective account holder, maximum 256 characters. You can use alphanumeric characters (A-Z, a-z, 0-9), white spaces, and underscores `_`. |
| `legalEntity` | [`LegalEntity`](../../doc/models/legal-entity.md) | Required | - |
| `primaryCurrency` | `string \| undefined` | Optional | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes), with which the prospective account holder primarily deals. |
| `processingTier` | `number \| undefined` | Optional | The starting [processing tier](https://docs.adyen.com/classic-platforms/onboarding-and-verification/precheck-kyc-information) for the prospective account holder. |
| `verificationProfile` | `string \| undefined` | Optional | The identifier of the profile that applies to this entity. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CreateAccountHolderRequest, Gender, LegalEntity } from 'adyen';

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
  },
  legalEntity: LegalEntity.Business,
  createDefaultAccount: false,
  description: 'description2',
  primaryCurrency: 'primaryCurrency4',
  processingTier: 44,
  verificationProfile: 'verificationProfile6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

