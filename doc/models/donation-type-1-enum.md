
# Donation Type 1 Enum

The type of donation to collect from the shopper. Possible values:

- **roundup**: Round up the transaction amount.

- **fixedAmounts**: Choose a fixed amount.

- **fixedAmountsRoundup**: Round up, or choose a fixed amount.

## Enumeration

`DonationType1Enum`

## Fields

| Name |
|  --- |
| `Roundup` |
| `FixedAmounts` |
| `FixedAmountsRoundup` |

## Example

```ts
import { DonationType1Enum } from 'adyen';

const donationType1 = DonationType1Enum.FixedAmounts;
```

