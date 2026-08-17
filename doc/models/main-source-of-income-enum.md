
# Main Source of Income Enum

The organization's main source of income. Only required if `businessType` is **other**.

Possible values: **businessOperation**, **realEstateSales**, **investmentInterestOrRoyalty**, **propertyRental**, **other**.

## Enumeration

`MainSourceOfIncomeEnum`

## Fields

| Name |
|  --- |
| `BusinessOperation` |
| `RealEstateSales` |
| `InvestmentInterestOrRoyalty` |
| `PropertyRental` |
| `Other` |

## Example

```ts
import { MainSourceOfIncomeEnum } from 'adyen';

const mainSourceOfIncome = MainSourceOfIncomeEnum.PropertyRental;
```

