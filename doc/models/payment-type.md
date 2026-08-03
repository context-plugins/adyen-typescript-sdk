
# Payment Type

Possible values:

* **Normal**
* **Refund**
* **OneTimeReservation**
* **FirstReservation**
* **UpdateReservation**
* **Completion**
* **CashAdvance**
* **CashDeposit**
* **Recurring**
* **Instalment**
* **IssuerInstalment**
* **PaidOut**

## Enumeration

`PaymentType`

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
import { PaymentType } from 'adyenlib';

const paymentType = PaymentType.UpdateReservation;
```

