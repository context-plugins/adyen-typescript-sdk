
# Transaction Type 1 Enum

Possible values:

* **Debit**
* **Credit**
* **ReverseDebit**
* **ReverseCredit**
* **OneTimeReservation**
* **CompletedDeffered**
* **FirstReservation**
* **UpdateReservation**
* **CompletedReservation**
* **CashAdvance**
* **IssuerInstalment**
* **Declined**
* **Failed**
* **Award**
* **ReverseAward**
* **Redemption**
* **ReverseRedemption**
* **Rebate**
* **ReverseRebate**

## Enumeration

`TransactionType1Enum`

## Fields

| Name |
|  --- |
| `Debit` |
| `Credit` |
| `ReverseDebit` |
| `ReverseCredit` |
| `OneTimeReservation` |
| `CompletedDeffered` |
| `FirstReservation` |
| `UpdateReservation` |
| `CompletedReservation` |
| `CashAdvance` |
| `IssuerInstalment` |
| `Declined` |
| `Failed` |
| `Award` |
| `ReverseAward` |
| `Redemption` |
| `ReverseRedemption` |
| `Rebate` |
| `ReverseRebate` |

## Example

```ts
import { TransactionType1Enum } from 'adyen';

const transactionType1 = TransactionType1Enum.CompletedReservation;
```

