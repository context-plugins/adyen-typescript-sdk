
# Rate Type 2 Enum

The type of transaction. Possible values:

* **splitPayment**: for payments
* **splitRefund**: for refunds

## Enumeration

`RateType2Enum`

## Fields

| Name |
|  --- |
| `SplitPayment` |
| `BalanceConversion` |
| `Transfer` |
| `SplitRefund` |

## Example

```ts
import { RateType2Enum } from 'adyen';

const rateType2 = RateType2Enum.SplitPayment;
```

