
# Update Account Holder Response

## Structure

`UpdateAccountHolderResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderCode` | `string \| undefined` | Optional | The code of the account holder. |
| `accountHolderDetails` | [`AccountHolderDetails3 \| undefined`](../../doc/models/account-holder-details-3.md) | Optional | Details of the account holder. |
| `accountHolderStatus` | [`AccountHolderStatus7 \| undefined`](../../doc/models/account-holder-status-7.md) | Optional | The new status of the account holder. |
| `description` | `string \| undefined` | Optional | The description of the account holder. |
| `invalidFields` | [`ErrorFieldType[] \| undefined`](../../doc/models/error-field-type.md) | Optional | in case the account holder has not been updated, contains account holder fields, that did not pass the validation. |
| `legalEntity` | [`LegalEntity2Enum \| undefined`](../../doc/models/legal-entity-2-enum.md) | Optional | The legal entity of the account holder. |
| `primaryCurrency` | `string \| undefined` | Optional | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes), with which the prospective account holder primarily deals. |
| `pspReference` | `string \| undefined` | Optional | The reference of a request. Can be used to uniquely identify the request. |
| `resultCode` | `string \| undefined` | Optional | The result code. |
| `verification` | [`KYCVerificationResult1 \| undefined`](../../doc/models/kyc-verification-result-1.md) | Optional | The details of KYC Verification of the account holder. |
| `verificationProfile` | `string \| undefined` | Optional | The identifier of the profile that applies to this entity. |

## Example

```ts
import {
  EventEnum,
  FieldNameEnum,
  GenderEnum,
  Status12Enum,
  UpdateAccountHolderResponse,
} from 'adyen';

const updateAccountHolderResponse: UpdateAccountHolderResponse = {
  accountHolderCode: 'accountHolderCode2',
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
  description: 'description6',
  invalidFields: [
    {
      errorCode: 78,
      errorDescription: 'errorDescription6',
      fieldType: {
        field: 'field6',
        fieldName: FieldNameEnum.DrivingLicenceFront,
        shareholderCode: 'shareholderCode0',
      },
    },
    {
      errorCode: 78,
      errorDescription: 'errorDescription6',
      fieldType: {
        field: 'field6',
        fieldName: FieldNameEnum.DrivingLicenceFront,
        shareholderCode: 'shareholderCode0',
      },
    },
    {
      errorCode: 78,
      errorDescription: 'errorDescription6',
      fieldType: {
        field: 'field6',
        fieldName: FieldNameEnum.DrivingLicenceFront,
        shareholderCode: 'shareholderCode0',
      },
    }
  ],
};
```

