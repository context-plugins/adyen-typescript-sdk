
# Adyen Commission Enum

Deducts the transaction fee due to Adyen under [blended rates](https://www.adyen.com/knowledge-hub/guides/payments-training-guide/get-the-best-from-your-card-processing) from the specified balance account.

Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**.

## Enumeration

`AdyenCommissionEnum`

## Fields

| Name |
|  --- |
| `DeductFromLiableAccount` |
| `DeductFromOneBalanceAccount` |

## Example

```ts
import { AdyenCommissionEnum } from 'adyen';

const adyenCommission = AdyenCommissionEnum.DeductFromLiableAccount;
```

