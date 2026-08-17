
# Message Category Enum

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

`MessageCategoryEnum`

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
import { MessageCategoryEnum } from 'adyen';

const messageCategory = MessageCategoryEnum.EnableService;
```

