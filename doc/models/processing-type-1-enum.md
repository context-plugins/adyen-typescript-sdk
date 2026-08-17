
# Processing Type 1 Enum

Contains information about how the payment was processed.

Possible values: **atmWithdraw**, **balanceInquiry**, **ecommerce**, **moto**, **pos**, **purchaseWithCashback**, **recurring**, **token**.

## Enumeration

`ProcessingType1Enum`

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
import { ProcessingType1Enum } from 'adyen';

const processingType1 = ProcessingType1Enum.Pos;
```

