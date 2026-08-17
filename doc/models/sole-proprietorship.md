
# Sole Proprietorship

## Structure

`SoleProprietorship`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `countryOfGoverningLaw` | `string` | Required | The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the governing country. |
| `dateOfIncorporation` | `string \| undefined` | Optional | The date when the legal arrangement was incorporated in YYYY-MM-DD format. |
| `doingBusinessAs` | `string \| undefined` | Optional | The registered name, if different from the `name`. |
| `doingBusinessAsAbsent` | `boolean \| null \| undefined` | Optional | Set this to **true** if the legal arrangement does not have a `Doing business as` name. |
| `financialReports` | [`FinancialReport[] \| undefined`](../../doc/models/financial-report.md) | Optional | The information from the financial report of the sole proprietorship. |
| `name` | `string` | Required | The legal name. |
| `principalPlaceOfBusiness` | [`Address41 \| undefined`](../../doc/models/address-41.md) | Optional | The business address. Required if the principal place of business is different from the `registeredAddress`. |
| `registeredAddress` | [`Address51`](../../doc/models/address-51.md) | Required | The address registered at the registrar, such as the Chamber of Commerce. |
| `registrationNumber` | `string \| undefined` | Optional | The registration number. |
| `taxAbsent` | `boolean \| null \| undefined` | Optional | The tax information is absent. |
| `taxInformation` | [`TaxInformation[] \| undefined`](../../doc/models/tax-information.md) | Optional | The tax information of the entity. |
| `vatAbsenceReason` | [`VatAbsenceReason1Enum \| undefined`](../../doc/models/vat-absence-reason-1-enum.md) | Optional | The reason for not providing a VAT number.<br><br>Possible values: **industryExemption**, **belowTaxThreshold**. |
| `vatNumber` | `string \| undefined` | Optional | The VAT number. |

## Example

```ts
import { SoleProprietorship } from 'adyen';

const soleProprietorship: SoleProprietorship = {
  countryOfGoverningLaw: 'countryOfGoverningLaw2',
  name: 'name2',
  registeredAddress: {
    country: 'country4',
    city: 'city0',
    postalCode: 'postalCode8',
    stateOrProvince: 'stateOrProvince8',
    street: 'street0',
    street2: 'street24',
  },
  dateOfIncorporation: 'dateOfIncorporation8',
  doingBusinessAs: 'doingBusinessAs0',
  doingBusinessAsAbsent: false,
  financialReports: [
    {
      annualTurnover: 'annualTurnover4',
      balanceSheetTotal: 'balanceSheetTotal2',
      currencyOfFinancialData: 'currencyOfFinancialData4',
      dateOfFinancialData: 'dateOfFinancialData8',
      employeeCount: 'employeeCount8',
    },
    {
      annualTurnover: 'annualTurnover4',
      balanceSheetTotal: 'balanceSheetTotal2',
      currencyOfFinancialData: 'currencyOfFinancialData4',
      dateOfFinancialData: 'dateOfFinancialData8',
      employeeCount: 'employeeCount8',
    }
  ],
  principalPlaceOfBusiness: {
    country: 'country6',
    city: 'city8',
    postalCode: 'postalCode6',
    stateOrProvince: 'stateOrProvince0',
    street: 'street2',
    street2: 'street22',
  },
};
```

