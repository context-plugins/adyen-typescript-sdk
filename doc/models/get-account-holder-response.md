
# Get Account Holder Response

## Structure

`GetAccountHolderResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderCode` | `string \| undefined` | Optional | The code of the account holder. |
| `accountHolderDetails` | [`AccountHolderDetails3 \| undefined`](../../doc/models/account-holder-details-3.md) | Optional | Details of the account holder. |
| `accountHolderStatus` | [`AccountHolderStatus3 \| undefined`](../../doc/models/account-holder-status-3.md) | Optional | The status of the account holder. |
| `accounts` | [`Account[] \| undefined`](../../doc/models/account.md) | Optional | A list of the accounts under the account holder. |
| `description` | `string \| undefined` | Optional | The description of the account holder. |
| `invalidFields` | [`ErrorFieldType[] \| undefined`](../../doc/models/error-field-type.md) | Optional | Contains field validation errors that would prevent requests from being processed. |
| `legalEntity` | [`LegalEntity2Enum \| undefined`](../../doc/models/legal-entity-2-enum.md) | Optional | The legal entity of the account holder. |
| `migrationData` | [`MigrationData2 \| undefined`](../../doc/models/migration-data-2.md) | Optional | Details of the account holder migrated to the balance platform. |
| `primaryCurrency` | `string \| undefined` | Optional | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes), with which the prospective account holder primarily deals. |
| `pspReference` | `string \| undefined` | Optional | The reference of a request. Can be used to uniquely identify the request. |
| `resultCode` | `string \| undefined` | Optional | The result code. |
| `systemUpToDateTime` | `string \| undefined` | Optional | The time that shows how up to date is the information in the response. |
| `verification` | [`KYCVerificationResult1 \| undefined`](../../doc/models/kyc-verification-result-1.md) | Optional | The details of KYC Verification of the account holder. |
| `verificationProfile` | `string \| undefined` | Optional | The identifier of the profile that applies to this entity. |

## Example

```ts
import {
  EventEnum,
  GenderEnum,
  GetAccountHolderResponse,
  Status12Enum,
} from 'adyen';

const getAccountHolderResponse: GetAccountHolderResponse = {
  accountHolderCode: 'accountHolderCode4',
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
  accountHolderStatus: {
    status: Status12Enum.Inactive,
    events: [
      {
        event: EventEnum.InactivateAccount,
        executionDate: '2016-03-13T12:52:32.123Z',
        reason: 'reason6',
      }
    ],
    payoutState: {
      allowPayout: false,
      disableReason: 'disableReason2',
      disabled: false,
      notAllowedReason: 'notAllowedReason4',
      payoutLimit: {
        currency: 'currency8',
        value: BigInt(88),
      },
    },
    processingState: {
      disableReason: 'disableReason2',
      disabled: false,
      processedFrom: {
        currency: 'currency4',
        value: BigInt(148),
      },
      processedTo: {
        currency: 'currency2',
        value: BigInt(54),
      },
      tierNumber: 156,
    },
    statusReason: 'statusReason8',
  },
  accounts: [
    {
      accountCode: 'accountCode0',
      bankAccountUUID: 'bankAccountUUID6',
      beneficiaryAccount: 'beneficiaryAccount2',
      beneficiaryMerchantReference: 'beneficiaryMerchantReference2',
      description: 'description0',
    },
    {
      accountCode: 'accountCode0',
      bankAccountUUID: 'bankAccountUUID6',
      beneficiaryAccount: 'beneficiaryAccount2',
      beneficiaryMerchantReference: 'beneficiaryMerchantReference2',
      description: 'description0',
    }
  ],
  description: 'description0',
};
```

