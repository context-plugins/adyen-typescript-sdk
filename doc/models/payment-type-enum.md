
# Payment Type Enum

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

`PaymentTypeEnum`

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
import { PaymentTypeEnum } from 'adyen';

const paymentType = PaymentTypeEnum.UpdateReservation;
```

