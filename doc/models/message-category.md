
# Message Category

Possible values:

* **Abort**
* **Admin**
* **BalanceInquiry**
* **CardAcquisition**
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
* **Payment**
* **Print**
* **Reconciliation**
* **Reversal**
* **StoredValue**
* **TransactionStatus**
* **None**

## Enumeration

`MessageCategory`

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
import { MessageCategory } from 'adyen';

const messageCategory = MessageCategory.EnableService;
```

