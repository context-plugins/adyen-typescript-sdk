
# Transaction Type 1

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

`TransactionType1`

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
import { TransactionType1 } from 'adyenlib';

const transactionType1 = TransactionType1.CompletedReservation;
```

