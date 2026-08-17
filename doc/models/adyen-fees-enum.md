
# Adyen Fees Enum

Deducts the fees due to Adyen (markup or commission) from the specified balance account.

Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**.

## Enumeration

`AdyenFeesEnum`

## Fields

| Name |
|  --- |
| `DeductFromLiableAccount` |
| `DeductFromOneBalanceAccount` |

## Example

```ts
import { AdyenFeesEnum } from 'adyen';

const adyenFees = AdyenFeesEnum.DeductFromLiableAccount;
```

