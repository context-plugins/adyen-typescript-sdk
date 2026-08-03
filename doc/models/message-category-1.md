
# Message Category 1

Category of message.
Possible values:

* **Abort**
* **Admin**
* **BalanceInquiry**
* **Batch**
* **CardAcquisition**
* **CardReaderInit**
* **CardReaderPowerOff**
* **Diagnosis**
* **Display**
* **EnableService**
* **Event**
* **GetTotals**
* **Input**
* **InputUpdate**
* **Login**
* **Logout**
* **Loyalty**
* **None**
* **PIN**
* **Payment**
* **Print**
* **Reconciliation**
* **Reversal**
* **Sound**
* **StoredValue**
* **TransactionStatus**
* **Transmit**

## Enumeration

`MessageCategory1`

## Fields

| Name |
|  --- |
| `Abort` |
| `Admin` |
| `BalanceInquiry` |
| `CardAcquisition` |
| `Diagnosis` |
| `Display` |
| `EnableService` |
| `Event` |
| `GetTotals` |
| `Input` |
| `InputUpdate` |
| `Login` |
| `Logout` |
| `Loyalty` |
| `Payment` |
| `Print` |
| `Reconciliation` |
| `Reversal` |
| `StoredValue` |
| `TransactionStatus` |
| `None` |

## Example

```ts
import { MessageCategory1 } from 'adyenlib';

const messageCategory1 = MessageCategory1.Reversal;
```

