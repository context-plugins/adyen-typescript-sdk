
# Donation Type 1

The type of donation to collect from the shopper. Possible values:

- **roundup**: Round up the transaction amount.

- **fixedAmounts**: Choose a fixed amount.

- **fixedAmountsRoundup**: Round up, or choose a fixed amount.

## Enumeration

`DonationType1`

## Fields

| Name |
|  --- |
| `Roundup` |
| `FixedAmounts` |
| `FixedAmountsRoundup` |

## Example

```ts
import { DonationType1 } from 'adyenlib';

const donationType1 = DonationType1.FixedAmounts;
```

