
# Organization

## Structure

`Organization`

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
| `institutionalSector` | [`InstitutionalSectorEnum \| undefined`](../../doc/models/institutional-sector-enum.md) | Optional | The institutional sector the organization operates within. |
| `legalForm` | `string \| undefined` | Optional | The type of business entity as defined in the national legal system. Use a legal form listed within the accepted legal forms compiled by the Central Bank of Europe. |
| `legalName` | `string` | Required | The organization's legal name. |
| `phone` | [`PhoneNumber2 \| undefined`](../../doc/models/phone-number-2.md) | Optional | The phone number of the legal entity. |
| `principalPlaceOfBusiness` | [`Address22 \| undefined`](../../doc/models/address-22.md) | Optional | The address where the organization operates from. Provide this if the principal place of business is different from the `registeredAddress`. |
| `registeredAddress` | [`Address31`](../../doc/models/address-31.md) | Required | The address of the organization registered at their registrar (such as the Chamber of Commerce). |
| `registrationNumber` | `string \| undefined` | Optional | The organization's registration number. |
| `registrationNumberAbsent` | `boolean \| null \| undefined` | Optional | Set this to **true** if the organization does not have a registration number available. Only applicable for organizations in New Zealand, and incorporated partnerships and government organizations in Australia. |
| `statusOfLegalProceeding` | [`StatusOfLegalProceedingEnum \| undefined`](../../doc/models/status-of-legal-proceeding-enum.md) | Optional | The status of any current or past legal action taken against the legal entity.<br><br>Possible values: **noLegalActionsTaken**, **underJudicialAdministration**, **bankruptcyInsolvency**, **otherLegalMeasures**<br><br>If the value of this field is **noLegalActionsTaken**, then `dateOfInitiationOfLegalProceeding` is not required. Otherwise, it is required. |
| `stockData` | [`StockData2 \| undefined`](../../doc/models/stock-data-2.md) | Optional | Information about the organization's publicly traded stock. Provide this object only if `type` is **listedPublicCompany**. |
| `support` | [`Support1 \| undefined`](../../doc/models/support-1.md) | Optional | Support information for the legal entity. Required if you have a platform setup. |
| `taxInformation` | [`TaxInformation[] \| undefined`](../../doc/models/tax-information.md) | Optional | The tax information of the organization. |
| `taxReportingClassification` | [`TaxReportingClassification2 \| undefined`](../../doc/models/tax-reporting-classification-2.md) | Optional | The tax reporting classification (FATCA/CRS self-certification) of the organization. |
| `type` | [`Type161Enum \| undefined`](../../doc/models/type-161-enum.md) | Optional | Type of organization.<br><br>Possible values: **associationIncorporated**, **governmentalOrganization**, **listedPublicCompany**, **nonProfit**, **partnershipIncorporated**, **privateCompany**. |
| `vatAbsenceReason` | [`VatAbsenceReasonEnum \| undefined`](../../doc/models/vat-absence-reason-enum.md) | Optional | The reason the organization has not provided a VAT number.<br><br>Possible values: **industryExemption**, **belowTaxThreshold**. |
| `vatNumber` | `string \| undefined` | Optional | The organization's VAT number. |
| `webData` | [`WebData1 \| undefined`](../../doc/models/web-data-1.md) | Optional | The website and app URL of the legal entity. |

## Example

```ts
import { Organization } from 'adyen';

const organization: Organization = {
  legalName: 'legalName2',
  registeredAddress: {
    country: 'country4',
    city: 'city0',
    postalCode: 'postalCode8',
    stateOrProvince: 'stateOrProvince8',
    street: 'street0',
    street2: 'street24',
  },
  countryOfGoverningLaw: 'countryOfGoverningLaw8',
  dateOfIncorporation: 'dateOfIncorporation4',
  dateOfInitiationOfLegalProceeding: 'dateOfInitiationOfLegalProceeding6',
  description: 'description6',
  doingBusinessAs: 'doingBusinessAs4',
};
```

