
# Business Details

*This model accepts additional fields of type unknown.*

## Structure

`BusinessDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `doingBusinessAs` | `string \| undefined` | Optional | The registered name of the company (if it differs from the legal name of the company). |
| `legalBusinessName` | `string \| undefined` | Optional | The legal name of the company. |
| `listedUltimateParentCompany` | [`UltimateParentCompany[] \| undefined`](../../doc/models/ultimate-parent-company.md) | Optional | Information about the parent public company. Required if the account holder is 100% owned by a publicly listed company. |
| `registrationNumber` | `string \| undefined` | Optional | The registration number of the company. |
| `shareholders` | [`ShareholderContact[] \| undefined`](../../doc/models/shareholder-contact.md) | Optional | Array containing information about individuals associated with the account holder either through ownership or control. For details about how you can identify them, refer to [our verification guide](https://docs.adyen.com/classic-platforms/verification-process#identify-ubos). |
| `signatories` | [`SignatoryContact[] \| undefined`](../../doc/models/signatory-contact.md) | Optional | Signatories associated with the company.<br>Each array entry should represent one signatory. |
| `stockExchange` | `string \| undefined` | Optional | Market Identifier Code (MIC). |
| `stockNumber` | `string \| undefined` | Optional | International Securities Identification Number (ISIN). |
| `stockTicker` | `string \| undefined` | Optional | Stock Ticker symbol. |
| `taxId` | `string \| undefined` | Optional | The tax ID of the company. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BusinessDetails, Gender } from 'adyenlib';

const businessDetails: BusinessDetails = {
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
};
```

