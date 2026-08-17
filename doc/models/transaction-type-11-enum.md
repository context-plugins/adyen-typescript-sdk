
# Transaction Type 11 Enum

Type of transaction for which totals are grouped.
Debit, Credit, ReverseDebit, ReverseCredit, OneTimeReservation, CompletedDeffered, FirstReservation, UpdateReservation, CompletedReservation, CashAdvance.
Possible values:

* **Award**
* **CashAdvance**
* **CompletedDeffered**
* **CompletedReservation**
* **Credit**
* **Debit**
* **Declined**
* **Failed**
* **FirstReservation**
* **IssuerInstalment**
* **OneTimeReservation**
* **Rebate**
* **Redemption**
* **ReverseAward**
* **ReverseCredit**
* **ReverseDebit**
* **ReverseRebate**
* **ReverseRedemption**
* **UpdateReservation**

## Enumeration

`TransactionType11Enum`

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
import { TransactionType11Enum } from 'adyen';

const transactionType11 = TransactionType11Enum.CompletedReservation;
```

