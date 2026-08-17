
# Vat Absence Reason Enum

The reason the organization has not provided a VAT number.

Possible values: **industryExemption**, **belowTaxThreshold**.

## Enumeration

`VatAbsenceReasonEnum`

## Fields

| Name |
|  --- |
| `IndustryExemption` |
| `BelowTaxThreshold` |

## Example

```ts
import { VatAbsenceReasonEnum } from 'adyen';

const vatAbsenceReason = VatAbsenceReasonEnum.IndustryExemption;
```

