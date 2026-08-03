
# Amount Adjustment Type

The type of markup that is applied to an authorised payment.

Possible values: **exchange**, **forexMarkup**, **authHoldReserve**, **atmMarkup**.

## Enumeration

`AmountAdjustmentType`

## Fields

| Name |
|  --- |
| `AtmMarkup` |
| `AuthHoldReserve` |
| `Exchange` |
| `ForexMarkup` |

## Example

```ts
import { AmountAdjustmentType } from 'adyenlib';

const amountAdjustmentType = AmountAdjustmentType.AtmMarkup;
```

