
# Rate Type 2

The type of transaction. Possible values:

* **splitPayment**: for payments
* **splitRefund**: for refunds

## Enumeration

`RateType2`

## Fields

| Name |
|  --- |
| `SplitPayment` |
| `BalanceConversion` |
| `Transfer` |
| `SplitRefund` |

## Example

```ts
import { RateType2 } from 'adyenlib';

const rateType2 = RateType2.SplitPayment;
```

