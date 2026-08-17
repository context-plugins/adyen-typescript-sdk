
# Tax Reporting Classification

## Structure

`TaxReportingClassification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `businessType` | [`BusinessTypeEnum \| undefined`](../../doc/models/business-type-enum.md) | Optional | The organization's business type.<br><br>Possible values: **other**, **listedPublicCompany**, **subsidiaryOfListedPublicCompany**, **governmentalOrganization**, **internationalOrganization**, **financialInstitution**. |
| `financialInstitutionNumber` | `string \| undefined` | Optional | The Global Intermediary Identification Number (GIIN) required for FATCA. Only required if the organization is a US financial institution and the `businessType` is **financialInstitution**. |
| `mainSourceOfIncome` | [`MainSourceOfIncomeEnum \| undefined`](../../doc/models/main-source-of-income-enum.md) | Optional | The organization's main source of income. Only required if `businessType` is **other**.<br><br>Possible values: **businessOperation**, **realEstateSales**, **investmentInterestOrRoyalty**, **propertyRental**, **other**. |
| `type` | [`Type151Enum \| undefined`](../../doc/models/type-151-enum.md) | Optional | The tax reporting classification type.<br><br>Possible values: **nonFinancialNonReportable**, **financialNonReportable**, **nonFinancialActive**, **nonFinancialPassive**. |

## Example

```ts
import {
  BusinessTypeEnum,
  MainSourceOfIncomeEnum,
  TaxReportingClassification,
  Type151Enum,
} from 'adyen';

const taxReportingClassification: TaxReportingClassification = {
  businessType: BusinessTypeEnum.SubsidiaryOfListedPublicCompany,
  financialInstitutionNumber: 'financialInstitutionNumber2',
  mainSourceOfIncome: MainSourceOfIncomeEnum.PropertyRental,
  type: Type151Enum.NonFinancialNonReportable,
};
```

