
# Payment Totals

Totals of the payment transaction during the reconciliation period.

## Structure

`PaymentTotals`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionType` | [`TransactionType11Enum`](../../doc/models/transaction-type-11-enum.md) | Required | Type of transaction for which totals are grouped.<br>Debit, Credit, ReverseDebit, ReverseCredit, OneTimeReservation, CompletedDeffered, FirstReservation, UpdateReservation, CompletedReservation, CashAdvance.<br>Possible values:<br><br>* **Award**<br>* **CashAdvance**<br>* **CompletedDeffered**<br>* **CompletedReservation**<br>* **Credit**<br>* **Debit**<br>* **Declined**<br>* **Failed**<br>* **FirstReservation**<br>* **IssuerInstalment**<br>* **OneTimeReservation**<br>* **Rebate**<br>* **Redemption**<br>* **ReverseAward**<br>* **ReverseCredit**<br>* **ReverseDebit**<br>* **ReverseRebate**<br>* **ReverseRedemption**<br>* **UpdateReservation** |
| `transactionCount` | `number` | Required | Number of processed transaction during the period. |
| `transactionAmount` | `number` | Required | Sum of amount of processed transaction during the period.<br><br>**Constraints**: `>= 0`, `<= 99999999.999999` |

## Example

```ts
import { PaymentTotals, TransactionType11Enum } from 'adyen';

const paymentTotals: PaymentTotals = {
  transactionType: TransactionType11Enum.Declined,
  transactionCount: 128,
  transactionAmount: 228.16,
};
```

