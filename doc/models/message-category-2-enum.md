
# Message Category 2 Enum

Category of message.
CardAcquisition, Display, Input, Loyalty, Payment, Print, CardReaderInit, CardReaderPowerOff.
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

`MessageCategory2Enum`

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
import { MessageCategory2Enum } from 'adyen';

const messageCategory2 = MessageCategory2Enum.StoredValue;
```

