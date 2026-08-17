
# Plan Enum

The installment plan, used for [card installments in Japan](https://docs.adyen.com/payment-methods/cards/credit-card-installments#make-a-payment-japan).
and [Mexico](https://docs.adyen.com/payment-methods/cards/credit-card-installments/#getting-paid-mexico).
By default, this is set to **regular**.

## Enumeration

`PlanEnum`

## Fields

| Name |
|  --- |
| `Bonus` |
| `BuynowPaylater` |
| `InteresRefundPrctg` |
| `InterestBonus` |
| `NointeresRefundPrctg` |
| `NointerestBonus` |
| `RefundPrctg` |
| `Regular` |
| `Revolving` |
| `WithInterest` |

## Example

```ts
import { PlanEnum } from 'adyen';

const plan = PlanEnum.NointeresRefundPrctg;
```

