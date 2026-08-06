
# Processing Type 1

Contains information about how the payment was processed.

Possible values: **atmWithdraw**, **balanceInquiry**, **ecommerce**, **moto**, **pos**, **purchaseWithCashback**, **recurring**, **token**.

## Enumeration

`ProcessingType1`

## Fields

| Name |
|  --- |
| `AtmWithdraw` |
| `BalanceInquiry` |
| `Ecommerce` |
| `Moto` |
| `Pos` |
| `PurchaseWithCashback` |
| `Recurring` |
| `Token` |

## Example

```ts
import { ProcessingType1 } from 'adyen';

const processingType1 = ProcessingType1.Pos;
```

