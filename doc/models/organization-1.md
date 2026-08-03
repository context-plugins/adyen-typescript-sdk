
# Organization 1

Information about the organization. Required if `type` is **organization**.

*This model accepts additional fields of type unknown.*

## Structure

`Organization1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `countryOfGoverningLaw` | `string \| undefined` | Optional | The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the governing country. |
| `dateOfIncorporation` | `string \| undefined` | Optional | The date when the organization was incorporated in YYYY-MM-DD format. |
| `dateOfInitiationOfLegalProceeding` | `string \| undefined` | Optional | Required if the value of `statusOfLegalProceeding` is one of the following:<br><br>**underJudicialAdministration**, **bankruptcyInsolvency**, **otherLegalMeasures**<br><br>The date at which a legal proceeding was initiated, in **YYYY-MM-DD** format. Example: **2000-02-12** |
| `description` | `string \| undefined` | Optional | Your description for the organization. |
| `doingBusinessAs` | `string \| undefined` | Optional | The organization's trading name, if different from the registered legal name. |
| `doingBusinessAsAbsent` | `boolean \| null \| undefined` | Optional | Set this to **true** if the organization or legal arrangement does not have a `Doing business as` name. |
| `economicSector` | `string \| undefined` | Optional | The sector of the economy the legal entity operates within, represented by a 2-4 digit code that may include a ".". Example: 45.11<br><br>You can locate economic sector codes for your area by referencing codes defined by the NACE (Nomenclature of Economic Activities) used in the European Union. |
| `email` | `string \| undefined` | Optional | The email address of the legal entity. |
| `financialReports` | [`FinancialReport[] \| undefined`](../../doc/models/financial-report.md) | Optional | The financial report information of the organization. |
| `globalLegalEntityIdentifier` | `string \| undefined` | Optional | The global legal entity identifier for the organization.<br><br>This field is not required if the `registrationNumber` for the organization has been provided. |
| `headOfficeIndicator` | `boolean \| undefined` | Optional | Indicates that the registered business address is also the company's headquarters. |
| `institutionalSector` | [`InstitutionalSector \| undefined`](../../doc/models/institutional-sector.md) | Optional | - |
| `legalForm` | `string \| undefined` | Optional | The type of business entity as defined in the national legal system. Use a legal form listed within the accepted legal forms compiled by the Central Bank of Europe. |
| `legalName` | `string` | Required | The organization's legal name. |
| `phone` | [`PhoneNumber \| undefined`](../../doc/models/phone-number.md) | Optional | - |
| `principalPlaceOfBusiness` | [`Address1 \| undefined`](../../doc/models/address-1.md) | Optional | - |
| `registeredAddress` | [`Address1`](../../doc/models/address-1.md) | Required | - |
| `registrationNumber` | `string \| undefined` | Optional | The organization's registration number. |
| `registrationNumberAbsent` | `boolean \| null \| undefined` | Optional | Set this to **true** if the organization does not have a registration number available. Only applicable for organizations in New Zealand, and incorporated partnerships and government organizations in Australia. |
| `statusOfLegalProceeding` | [`StatusOfLegalProceeding \| undefined`](../../doc/models/status-of-legal-proceeding.md) | Optional | - |
| `stockData` | [`StockData \| undefined`](../../doc/models/stock-data.md) | Optional | - |
| `support` | [`Support \| undefined`](../../doc/models/support.md) | Optional | - |
| `taxInformation` | [`TaxInformation[] \| undefined`](../../doc/models/tax-information.md) | Optional | The tax information of the organization. |
| `taxReportingClassification` | [`TaxReportingClassification \| undefined`](../../doc/models/tax-reporting-classification.md) | Optional | - |
| `type` | [`Type161 \| undefined`](../../doc/models/type-161.md) | Optional | - |
| `vatAbsenceReason` | [`VatAbsenceReason \| undefined`](../../doc/models/vat-absence-reason.md) | Optional | - |
| `vatNumber` | `string \| undefined` | Optional | The organization's VAT number. |
| `webData` | [`WebData \| undefined`](../../doc/models/web-data.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Organization1 } from 'adyenlib';

const organization1: Organization1 = {
  legalName: 'legalName0',
  registeredAddress: {
    country: 'country4',
    city: 'city0',
    postalCode: 'postalCode8',
    stateOrProvince: 'stateOrProvince8',
    street: 'street0',
    street2: 'street24',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  countryOfGoverningLaw: 'countryOfGoverningLaw6',
  dateOfIncorporation: 'dateOfIncorporation2',
  dateOfInitiationOfLegalProceeding: 'dateOfInitiationOfLegalProceeding8',
  description: 'description8',
  doingBusinessAs: 'doingBusinessAs6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

