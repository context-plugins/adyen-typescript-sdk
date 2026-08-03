
# Transaction Type 11

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

`TransactionType11`

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
import { TransactionType11 } from 'adyenlib';

const transactionType11 = TransactionType11.CompletedReservation;
```

