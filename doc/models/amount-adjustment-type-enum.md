
# Amount Adjustment Type Enum

The type of markup that is applied to an authorised payment.

Possible values: **exchange**, **forexMarkup**, **authHoldReserve**, **atmMarkup**.

## Enumeration

`AmountAdjustmentTypeEnum`

## Fields

| Name |
|  --- |
| `AtmMarkup` |
| `AuthHoldReserve` |
| `Exchange` |
| `ForexMarkup` |

## Example

```ts
import { AmountAdjustmentTypeEnum } from 'adyen';

const amountAdjustmentType = AmountAdjustmentTypeEnum.AtmMarkup;
```

