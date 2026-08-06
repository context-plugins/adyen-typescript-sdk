
# Vat Absence Reason 1

The reason for not providing a VAT number.

Possible values: **industryExemption**, **belowTaxThreshold**.

## Enumeration

`VatAbsenceReason1`

## Fields

| Name |
|  --- |
| `IndustryExemption` |
| `BelowTaxThreshold` |

## Example

```ts
import { VatAbsenceReason1 } from 'adyen';

const vatAbsenceReason1 = VatAbsenceReason1.IndustryExemption;
```

