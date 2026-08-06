
# Tax Reporting Classification

*This model accepts additional fields of type unknown.*

## Structure

`TaxReportingClassification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `businessType` | [`BusinessType \| undefined`](../../doc/models/business-type.md) | Optional | - |
| `financialInstitutionNumber` | `string \| undefined` | Optional | The Global Intermediary Identification Number (GIIN) required for FATCA. Only required if the organization is a US financial institution and the `businessType` is **financialInstitution**. |
| `mainSourceOfIncome` | [`MainSourceOfIncome \| undefined`](../../doc/models/main-source-of-income.md) | Optional | - |
| `type` | [`Type151 \| undefined`](../../doc/models/type-151.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  BusinessType,
  MainSourceOfIncome,
  TaxReportingClassification,
  Type151,
} from 'adyen';

const taxReportingClassification: TaxReportingClassification = {
  businessType: BusinessType.SubsidiaryOfListedPublicCompany,
  financialInstitutionNumber: 'financialInstitutionNumber2',
  mainSourceOfIncome: MainSourceOfIncome.PropertyRental,
  type: Type151.NonFinancialNonReportable,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

