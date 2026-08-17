
# Payment Type 1 Enum

Type of payment transaction. Elements requested by the Sale System that are related to the payment only.
Possible values:

* **CashAdvance**
* **CashDeposit**
* **Completion**
* **FirstReservation**
* **Instalment**
* **IssuerInstalment**
* **Normal**
* **OneTimeReservation**
* **PaidOut**
* **Recurring**
* **Refund**
* **UpdateReservation**

## Enumeration

`PaymentType1Enum`

## Fields

| Name |
|  --- |
| `Normal` |
| `Refund` |
| `OneTimeReservation` |
| `FirstReservation` |
| `UpdateReservation` |
| `Completion` |
| `CashAdvance` |
| `CashDeposit` |
| `Recurring` |
| `Instalment` |
| `IssuerInstalment` |
| `PaidOut` |

## Example

```ts
import { PaymentType1Enum } from 'adyen';

const paymentType1 = PaymentType1Enum.UpdateReservation;
```

