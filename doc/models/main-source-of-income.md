
# Main Source of Income

The organization's main source of income. Only required if `businessType` is **other**.

Possible values: **businessOperation**, **realEstateSales**, **investmentInterestOrRoyalty**, **propertyRental**, **other**.

## Enumeration

`MainSourceOfIncome`

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
import { MainSourceOfIncome } from 'adyen';

const mainSourceOfIncome = MainSourceOfIncome.PropertyRental;
```

