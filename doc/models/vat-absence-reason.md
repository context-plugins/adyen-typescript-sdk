
# Vat Absence Reason

The reason the organization has not provided a VAT number.

Possible values: **industryExemption**, **belowTaxThreshold**.

## Enumeration

`VatAbsenceReason`

## Fields

| Name |
|  --- |
| `IndustryExemption` |
| `BelowTaxThreshold` |

## Example

```ts
import { VatAbsenceReason } from 'adyen';

const vatAbsenceReason = VatAbsenceReason.IndustryExemption;
```

